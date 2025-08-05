export default function Header() {
  return (
    <header className="w-full h-auto flex items-center p-6 justify-evenly bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b border-white/20">
      
      {/* Name */}
      <a
        href="#"
        className="group relative inline-block text-violet-200 text-4xl font-bold overflow-hidden"
      >
        <span className="bg-gradient-to-r from-white via-violet-600 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
          Chaitany Mishra
        </span>
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
      </a>

      {/* Nav Links */}
      <nav className="mt-1">
        <ul className="flex text-violet-200 text-lg gap-6 pt-2">
          {["Home", "About", "Education", "Projects", "Contacts"].map((item) => (
            <a
              key={item}
              href="#"
              className="group relative inline-block font-medium overflow-hidden"
            >
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
}
