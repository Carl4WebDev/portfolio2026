import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { GithubIcon, FacebookIcon } from './icons'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/portfolio'

const COOLDOWN_SECONDS = 60

const links = [
  { icon: <Mail size={18} className="text-primary" />, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: <GithubIcon size={18} className="text-primary" />, label: 'GitHub', href: personalInfo.github, value: 'github.com/Carl4WebDev' },
  { icon: <FacebookIcon size={18} className="text-primary" />, label: 'Facebook', href: personalInfo.facebook, value: 'facebook.com/carlcarlcarlivanivansss' },
  { icon: <FileText size={18} className="text-primary" />, label: 'Resume', href: personalInfo.resumeUrl, value: 'Download PDF' },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [cooldown, setCooldown] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startCooldown = useCallback(() => {
    setCooldown(COOLDOWN_SECONDS)
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.get('name'),
          reply_email: formData.get('reply_email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          time: new Date().toLocaleString(),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus('sent')
          form.reset()
          startCooldown()
        },
        () => setStatus('error')
      )
  }

  return (
    <section id="contact" className="py-20 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="I'm open to opportunities and always happy to connect"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-border p-8 mb-8">
            <h3 className="text-xl font-bold text-text mb-3 text-center">
              Send me a message
            </h3>
            <p className="text-text-secondary mb-6 text-center">
              Whether you have a project idea, a job opportunity, or just want to
              say hello — I'd love to hear from you.
            </p>

            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="reply_email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-bg-card text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending' || cooldown > 0}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {status === 'sending'
                    ? 'Sending...'
                    : cooldown > 0
                      ? `Wait ${cooldown}s`
                      : 'Send Message'}
                </button>
              </div>
              {status === 'sent' && (
                <p className="text-sm text-green-600 text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 text-center">Failed to send message. Please try again or email me directly.</p>
              )}
            </form>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                className="flex items-center gap-4 p-4 bg-bg-card rounded-xl border border-border hover:shadow-sm transition-shadow"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  {link.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-text">{link.label}</div>
                  <div className="text-xs text-text-secondary">{link.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
