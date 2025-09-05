
"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/Button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
void motion;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const { theme } = useTheme()

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message cannot be empty'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    try {
      setStatus('sending')
      // placeholder: integrate your email endpoint here
      await new Promise((r) => setTimeout(r, 700))
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  function fieldClass(name) {
    return `w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${errors[name] ? 'border-red-400 ring-1 ring-red-200' : ''}`
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Contact</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-8 backdrop-blur-sm border border-slate-100 flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            type="text"
            placeholder="Your Name"
            className={fieldClass('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Email</label>
          <input
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            type="email"
            placeholder="Your Email"
            className={fieldClass('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-700">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            placeholder="Your Message"
            rows={5}
            className={fieldClass('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
        </div>

        <Button type="submit" className="w-full text-lg py-3 btn-primary">
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent — Thank you' : 'Send Message'}
        </Button>
        {status === 'error' && <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again later.</p>}
      </motion.form>

      <div className="flex justify-center gap-8 mt-10">
        <a href="https://github.com/ChaitanyMishra" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-700 hover:text-indigo-500 transition-colors duration-200">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/chaitany-dev-hash/" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-700 hover:text-indigo-500 transition-colors duration-200">
          <SiLinkedin />
        </a>
      </div>
    </section>
  );
}
