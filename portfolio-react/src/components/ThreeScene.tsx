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

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particleCount = 100;
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
      color: 0x8b9567,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add some floating geometric shapes
    const shapes: FloatingShape[] = [];
    const shapeCount = 15;

    for (let i = 0; i < shapeCount; i++) {
      const geometry = Math.random() > 0.5 ?
        new THREE.TetrahedronGeometry(0.1) :
        new THREE.OctahedronGeometry(0.08);

      const material = new THREE.MeshBasicMaterial({
        color: 0xa4af7a,
        transparent: true,
        opacity: 0.3,
        wireframe: true,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8
      );

      shapes.push({
        mesh: shape,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.005,
        },
        floatSpeed: {
          x: (Math.random() - 0.5) * 0.002,
          y: (Math.random() - 0.5) * 0.002,
          z: (Math.random() - 0.5) * 0.001,
        },
        originalPosition: shape.position.clone(),
      });

      scene.add(shape);
    }

    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / width) * 2 - 1;
      mouseY = -(event.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Animate particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Wrap around edges
        if (positions[i * 3] > 10) positions[i * 3] = -10;
        if (positions[i * 3] < -10) positions[i * 3] = 10;
        if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
        if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
        if (positions[i * 3 + 2] > 5) positions[i * 3 + 2] = -5;
        if (positions[i * 3 + 2] < -5) positions[i * 3 + 2] = 5;
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
        if (Math.abs(shape.mesh.position.x - shape.originalPosition.x) > 3) {
          shape.floatSpeed.x *= -1;
        }
        if (Math.abs(shape.mesh.position.y - shape.originalPosition.y) > 3) {
          shape.floatSpeed.y *= -1;
        }
        if (Math.abs(shape.mesh.position.z - shape.originalPosition.z) > 2) {
          shape.floatSpeed.z *= -1;
        }
      });

      // Subtle camera movement based on mouse
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02;
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
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach(shape => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeScene;
