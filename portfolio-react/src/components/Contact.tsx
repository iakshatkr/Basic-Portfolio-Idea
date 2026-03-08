import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [formError, setFormError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formError) setFormError('');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setFormError('Please enter your email');
      return false;
    }
    if (!formData.message.trim()) {
      setFormError('Please enter your message');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormError('');

    try {
      // For now, we'll use mailto to open email client
      // In a real app, you'd send this to your backend
      const mailtoLink = `mailto:your.email@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! Your email client should open now.');

    } catch (error) {
      setFormError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section fade-in">
      <div className="container">
        <h2 id="contact-title">Let's Connect</h2>
        <p className="subtitle">I'm always interested in hearing about new projects and opportunities. Feel free to reach out.</p>
        <div className="card" style={{padding: '1.25rem'}}>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </label>
            {formError && (
              <div id="formError" className="form-error" role="alert" style={{color: 'var(--primary)', marginBottom: '1rem'}}>
                {formError}
              </div>
            )}
            <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap'}}>
              <button type="submit" className="btn primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              <a className="btn secondary" href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn secondary" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
