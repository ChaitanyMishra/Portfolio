export default function Header(){
    return(
        <header className=" w-full h-auto flex items-center p-6   bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b border-white/20">
                <a href="#" className=" text-violet-200 text-4xl">Chaitany Mishra</a>
                <nav className="mt-1">
                    <ul className=" flex text-violet-200 text-lg gap-6 ">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Education</a>
                        <a href="#">Projects</a>
                        <a href="#">Contacts</a>
                    </ul>
                </nav>
        </header>
    )
}