const Footer = () => {
  return (
    <footer className="w-full py-6 text-center bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 text-white/70 border-t border-white/10 dark:border-zinc-800/40">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Chaitanya Mishra. All rights reserved.
      </div>
    </footer>
  );
}
  
export default Footer
