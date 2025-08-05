const Footer = () => {
  return (
    <footer className=' flex text-violet-200 py-5 bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b mt-6 border-x-white/20  '>
        <div className=" flex">
            <div className="bg-violet-500 flex flex-col">
                <ul>
                    <li><a href="https://github.com/ChaitanyMishra">Git Hub</a></li>
                    <li><a href="https://linkedin.com/in/chaitany-dev-hash">LinkedIn</a></li>
                    <li><a href="mailto:chaitany.mishra.tech@gmail.com">Email</a></li>
                </ul>
            </div>
            
            <p className="text-violet-200 text-center ">© 2025 Chaitany Mishra. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
