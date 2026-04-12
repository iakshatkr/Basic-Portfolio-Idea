import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface FloatingShape {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  rotationSpeed: {
    x: number;
    y: number;
    z: number;
  };
  floatSpeed: {
    x: number;
    y: number;
    z: number;
  };
  originalPosition: THREE.Vector3;
}

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const isMobileViewport = window.innerWidth < 640;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    let animationFrameId = 0;
    let isActive = true;
    let lastFrameTime = 0;
    const targetFrameInterval = 1000 / (isMobileViewport ? 28 : 45);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'three-scene-canvas';
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = isMobileViewport ? 24 : window.innerWidth < 900 ? 40 : 56;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xcff7a2,
      size: isMobileViewport ? 0.12 : window.innerWidth < 900 ? 0.08 : 0.11,
      transparent: true,
      opacity: isMobileViewport ? 0.72 : 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add some floating geometric shapes
    const shapes: FloatingShape[] = [];
    const shapeCount = isMobileViewport ? 4 : window.innerWidth < 900 ? 7 : 10;
    const shapeGroup = new THREE.Group();

    for (let i = 0; i < shapeCount; i++) {
      const geometry = Math.random() > 0.5 ?
        new THREE.TetrahedronGeometry(isMobileViewport ? 0.22 : 0.18) :
        new THREE.OctahedronGeometry(isMobileViewport ? 0.18 : 0.15);

      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xbff58b : 0xffd38c,
        transparent: true,
        opacity: isMobileViewport ? 0.58 : 0.5,
        wireframe: true,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * (isMobileViewport ? 11 : 15),
        (Math.random() - 0.5) * (isMobileViewport ? 12 : 15),
        (Math.random() - 0.5) * (isMobileViewport ? 6 : 8)
      );

      shapes.push({
        mesh: shape,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.005,
        },
        floatSpeed: {
          x: (Math.random() - 0.5) * (isMobileViewport ? 0.0014 : 0.002),
          y: (Math.random() - 0.5) * (isMobileViewport ? 0.0014 : 0.002),
          z: (Math.random() - 0.5) * (isMobileViewport ? 0.0007 : 0.001),
        },
        originalPosition: shape.position.clone(),
      });

      shapeGroup.add(shape);
    }
    scene.add(shapeGroup);

    camera.position.z = isMobileViewport ? 5.4 : 4.4;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleVisibilityChange = () => {
      isActive = document.visibilityState === 'visible';
      if (isActive) {
        lastFrameTime = 0;
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = (time = 0) => {
      if (!isActive) return;

      animationFrameId = window.requestAnimationFrame(animate);

      if (time - lastFrameTime < targetFrameInterval) {
        return;
      }
      lastFrameTime = time;

      // Animate particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around edges
        const maxX = isMobileViewport ? 7 : 10;
        const maxY = isMobileViewport ? 8 : 10;
        const maxZ = isMobileViewport ? 4 : 5;
        if (positions[i * 3] > maxX) positions[i * 3] = -maxX;
        if (positions[i * 3] < -maxX) positions[i * 3] = maxX;
        if (positions[i * 3 + 1] > maxY) positions[i * 3 + 1] = -maxY;
        if (positions[i * 3 + 1] < -maxY) positions[i * 3 + 1] = maxY;
        if (positions[i * 3 + 2] > maxZ) positions[i * 3 + 2] = -maxZ;
        if (positions[i * 3 + 2] < -maxZ) positions[i * 3 + 2] = maxZ;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Animate shapes
      shapes.forEach((shape) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;

        shape.mesh.position.x += shape.floatSpeed.x;
        shape.mesh.position.y += shape.floatSpeed.y;
        shape.mesh.position.z += shape.floatSpeed.z;

        // Bounce back when too far
        if (Math.abs(shape.mesh.position.x - shape.originalPosition.x) > (isMobileViewport ? 1.8 : 3)) {
          shape.floatSpeed.x *= -1;
        }
        if (Math.abs(shape.mesh.position.y - shape.originalPosition.y) > (isMobileViewport ? 2.2 : 3)) {
          shape.floatSpeed.y *= -1;
        }
        if (Math.abs(shape.mesh.position.z - shape.originalPosition.z) > (isMobileViewport ? 1.2 : 2)) {
          shape.floatSpeed.z *= -1;
        }
      });

      shapeGroup.rotation.y += isMobileViewport ? 0.00075 : 0.0012;
      shapeGroup.rotation.x += isMobileViewport ? 0.0002 : 0.00045;

      if (isMobileViewport) {
        const driftTime = time * 0.00018;
        const targetX = Math.sin(driftTime) * 0.22;
        const targetY = Math.cos(driftTime * 1.3) * 0.16;
        camera.position.x += (targetX - camera.position.x) * 0.028;
        camera.position.y += (targetY - camera.position.y) * 0.028;
      } else {
        camera.position.x += (mouseX * 0.7 - camera.position.x) * 0.02;
        camera.position.y += (mouseY * 0.45 - camera.position.y) * 0.02;
      }
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isActive = false;
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach(shape => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
      scene.remove(shapeGroup);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-scene-layer"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeScene;
