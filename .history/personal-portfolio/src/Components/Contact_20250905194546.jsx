
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
    <section id="contact" className={`py-20 px-6 ${theme.colors.primary} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className={`${theme.colors.glass} backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl`}>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-white font-medium">chaitany.mishra.tech@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 9305224208</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Location</p>
                    <p className="text-white font-medium">Kanpur, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/ChaitanyMishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white text-2xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SiGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/chaitany-dev-hash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white text-2xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SiLinkedin />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${theme.colors.glass} backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl`}
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
