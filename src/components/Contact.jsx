import { useState, useRef } from 'react'
import { useToast } from '../App'

const EMAIL = 'jayshivram4@gmail.com'
const WHATSAPP_NUMBER = '+255743851233'

const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const showToast = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      showToast('📋 Email address copied!', 'success')
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <span className="copy-email-wrapper">
      <a href={`mailto:${EMAIL}`} style={{ fontWeight: 500 }}>{EMAIL}</a>
      <button
        className="copy-email-btn"
        onClick={handleCopy}
        aria-label="Copy email address"
        title="Copy email"
        id="copyEmailBtn"
      >
        <span className="material-icons-round">{copied ? 'check' : 'content_copy'}</span>
        <span className={`copy-email-tooltip${copied ? ' visible' : ''}`}>
          {copied ? 'Copied!' : 'Copy email'}
        </span>
      </button>
    </span>
  )
}

export default function Contact() {
  const showToast = useToast()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [emailStatus, setEmailStatus] = useState({ msg: '', type: '' })
  const statusTimerRef = useRef(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.id]: e.target.value }))

  const validate = () => {
    const { name, email, subject, message } = form
    if (!name || !email || !subject || !message) {
      showToast('Please fill in all fields before sending.', 'error')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error')
      return false
    }
    return true
  }

  const setStatus = (msg, type) => {
    setEmailStatus({ msg, type })
    clearTimeout(statusTimerRef.current)
    statusTimerRef.current = setTimeout(() => setEmailStatus({ msg: '', type: '' }), 6000)
  }

  const handleEmail = () => {
    if (!validate()) return

    const emailjsReady = EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
    const { name, email, subject, message } = form

    if (!emailjsReady) {
      const body = `Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      showToast('Opening your email client… 📧', 'success')
      setStatus('✅ Email client opened — hit Send to deliver your message. (Configure EmailJS in the code for direct sending)', 'success')
      return
    }

    setSending(true)
    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      subject,
      message,
      to_email:   EMAIL,
    }).then(() => {
      showToast('Message sent successfully! 🎉', 'success')
      setStatus('✅ Message delivered — Jay will get back to you soon!', 'success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }).catch(err => {
      console.error('EmailJS error:', err)
      const body = `Name: ${name}\nFrom: ${email}\n\nMessage:\n${message}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('⚠️ Direct send failed — your email client opened as a fallback.', 'error')
      showToast('Opened email client as fallback.', 'info')
    }).finally(() => setSending(false))
  }

  const handleWhatsApp = () => {
    if (!validate()) return
    const { name, email, subject, message } = form
    const text = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    showToast('Opening WhatsApp with your message...', 'success')
  }

  return (
    <section id="contact" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div className="section-header animate-slide-up">
          <h2>Get In Touch</h2>
          <p>Let's discuss how I can contribute to your financial needs</p>
        </div>

        {/* Copy-email row */}
        <div style={{ textAlign: 'center', marginBottom: 32 }} className="animate-slide-up">
          <p style={{ marginBottom: 8, fontSize: '0.9rem' }}>Or reach me directly:</p>
          <CopyEmailButton />
        </div>

        <div className="contact-form animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <form id="contactForm" onSubmit={e => e.preventDefault()}>
            {[
              { id: 'name',    label: 'Your Name',     type: 'text',  tag: 'input' },
              { id: 'email',   label: 'Email Address', type: 'email', tag: 'input' },
              { id: 'subject', label: 'Subject',       type: 'text',  tag: 'input' },
              { id: 'message', label: 'Your Message',  type: null,    tag: 'textarea' },
            ].map(({ id, label, type, tag: Tag }) => (
              <div className="form-group" key={id}>
                <label htmlFor={id}>{label}</label>
                <Tag
                  id={id}
                  type={type || undefined}
                  value={form[id]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="form-buttons">
              <button
                type="button"
                className="btn btn-primary"
                id="sendEmailBtn"
                onClick={handleEmail}
                disabled={sending}
              >
                <span className="material-icons-round">{sending ? 'hourglass_top' : 'send'}</span>
                {sending ? 'Sending…' : 'Send Message'}
              </button>
              <button
                type="button"
                className="btn btn-whatsapp"
                id="sendWhatsAppBtn"
                onClick={handleWhatsApp}
              >
                <img
                  src="https://img.icons8.com/?size=24&id=16713&format=png&color=ffffff"
                  alt="WhatsApp"
                  style={{ marginRight: 6 }}
                />
                Send via WhatsApp
              </button>
            </div>

            {emailStatus.msg && (
              <div id="emailSendStatus" className={emailStatus.type}>
                {emailStatus.msg}
              </div>
            )}
          </form>
        </div>

        {/* CV Download */}
        <div style={{ textAlign: 'center', marginTop: 60 }} className="animate-slide-up">
          <h3 style={{ marginBottom: 20 }}>Download CV</h3>
          <div className="contact-info" style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <a
              href="/Jay Shivram CV.pdf"
              download="Jay Shivram CV.pdf"
              className="btn btn-outline"
              id="downloadCv"
              style={{ padding: '8px 16px', fontSize: '0.875rem' }}
              onClick={() => showToast('Downloading CV...', 'success')}
            >
              <span className="material-icons-round">download</span>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
