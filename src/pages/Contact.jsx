import { useState } from 'react'
import API from '../api/axios'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(initialForm)
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await API.post('/contact', form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-page">
      <div className="page-header">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's talk.</p>
      </div>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <a href="mailto:shanipatel5008@gmail.com">you@email.com</a>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Prayagraj, India</p>
          </div>
          <div className="info-item">
            <h4>Availability</h4>
            <p>Open to freelance & full-time roles</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/shani-patel14"      target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/patel-shani?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-success">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
