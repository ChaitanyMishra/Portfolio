import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: integrate email service or backend endpoint
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            required
            placeholder="Message"
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-accent rounded-md font-semibold shadow-lg hover:shadow-accent/50 transition-colors"
          >
            Send Message
          </motion.button>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center"
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center"
            >
              Something went wrong. Please try again later.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;