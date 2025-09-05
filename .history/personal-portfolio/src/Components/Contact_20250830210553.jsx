
import { motion } from "framer-motion";
void motion;
import { Button } from "../components/ui/Button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-[color:var(--background)]">
      <h2 className="text-3xl font-bold mb-8 text-center text-[color:var(--secondary)]">Contact</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
  className="max-w-lg mx-auto bg-[color:var(--card)]/70 rounded-2xl p-8 shadow-xl backdrop-blur-lg border border-[color:var(--border)] flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded-lg bg-[color:var(--input)] text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]/50"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-lg bg-zinc-800/40 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-3 rounded-lg bg-zinc-800/40 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
        />
        <Button type="submit" className="w-full text-lg">Send Message</Button>
      </motion.form>
      <div className="flex justify-center gap-8 mt-10">
        <a href="https://github.com/ChaitanyMishra" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-indigo-400 transition-colors duration-200 hover:shadow-[0_0_16px_#a78bfa]">
          <SiGithub />
        </a>
        <a href="https://www.linkedin.com/in/chaitany-dev-hash/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-indigo-400 transition-colors duration-200 hover:shadow-[0_0_16px_#a78bfa]">
          <SiLinkedin />
        </a>
      </div>
    </section>
  );
}
