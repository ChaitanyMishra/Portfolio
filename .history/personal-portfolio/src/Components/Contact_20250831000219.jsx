"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | success | error

  function validate() {
    const e = { name: "", email: "", message: "" };
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Please enter a valid email.";
    if (!message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return !e.name && !e.email && !e.message;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("idle");
    if (!validate()) {
      setStatus("error");
      return;
    }
    try {
      // placeholder: send to API or email service
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  const inputBase = "w-full px-4 py-3 rounded-lg focus:outline-none transition-all";

  return (
    <section id="contacts" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Contact</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white/90 rounded-2xl p-8 shadow-xl border border-slate-200/40 flex flex-col gap-4"
      >
        <div>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            type="text"
            placeholder="Your Name"
            className={`${inputBase} ${errors.name ? 'border border-red-400 ring-1 ring-red-300 bg-white/95 text-slate-900' : 'border border-slate-200 bg-white/95 text-slate-900'}`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            placeholder="Your Email"
            className={`${inputBase} ${errors.email ? 'border border-red-400 ring-1 ring-red-300 bg-white/95 text-slate-900' : 'border border-slate-200 bg-white/95 text-slate-900'}`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            placeholder="Your Message"
            rows={5}
            className={`${inputBase} ${errors.message ? 'border border-red-400 ring-1 ring-red-300 bg-white/95 text-slate-900' : 'border border-slate-200 bg-white/95 text-slate-900'}`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div>
          <Button type="submit" className="w-full text-lg">
            {status === 'success' ? 'Sent ✓' : 'Send Message'}
          </Button>
        </div>
        {status === 'error' && <div className="text-sm text-red-500 mt-1">Please fix the highlighted fields.</div>}
      </motion.form>

      <div className="flex justify-center gap-8 mt-10">
        <a href="https://github.com/ChaitanyMishra" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-700 hover:text-indigo-500 transition-colors duration-200">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/chaitany-dev-hash/" target="_blank" rel="noopener noreferrer" className="text-3xl text-indigo-700 hover:text-indigo-500 transition-colors duration-200">
          <SiLinkedin />
        </a>
      </div>
    </section>
  );
}
