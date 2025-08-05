export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md text-violet-200 p-6 mt-10 rounded-t-2xl border-t border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">© 2025 Chaitany Mishra. All rights reserved.</p>

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/ChaitanyMishra" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition duration-300">GitHub</a>
          <a href="https://linkedin.com/in/chaitany-dev-hash" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition duration-300">LinkedIn</a>
          <a href="mailto:chaitany.mishra.tech@gmail.com" className="hover:underline hover:text-white transition duration-300">Email</a>
        </div>
      </div>

      <p className="text-center mt-4 italic text-sm">
        “Crafting digital experiences with logic and creativity.”
      </p>
    </footer>
  );
}
