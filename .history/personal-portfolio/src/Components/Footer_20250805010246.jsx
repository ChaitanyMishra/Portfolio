const Footer = () => {
  return (
    <footer className=' justify-evenly flex text-violet-200  bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b mt-6 border-x-white/20  '>
        <div className=" flex justify-evenly items-center">
            <div className="bg-violet-500 flex flex-col px-5 w-[] h-full py-5">
                <ul>
                    <li><a href="https://github.com/ChaitanyMishra">Git Hub</a></li>
                    <li><a href="https://linkedin.com/in/chaitany-dev-hash">LinkedIn</a></li>
                    <li><a href="mailto:chaitany.mishra.tech@gmail.com">Email</a></li>
                </ul>
            </div>
            
            
        </div>
        <p className="text-violet-200 text-base ">© 2025 Chaitany Mishra. All rights reserved.</p>
    </footer>
  )
}

export default Footer
