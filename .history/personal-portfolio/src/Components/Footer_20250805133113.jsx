const Footer = () => {
  return (
    <footer className=' flex text-violet-200  bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b mt-6 border-x-white/20  '>
        <div className=" flex">
            <div className=" flex flex-col px-5 h-full py-5">
              <span className=" text-2xl font-serif sami-bold underline">Connect Online</span>
                <ul className=" absolute left-10">
                  {[ "Email" ,"LinkedIn" , "Git Hub" ].map((item) =>(
                    <a key={item} href="#" className="group relative font-medium overflow-hidden flex flex-col  ">
                      <span className="px-3 py-2 hover:rounded-lg hover:bg-violet-200 hover:text-violet-600 my-1 hover:text-center transition-all duration-500 ">{item}</span> 
                                           
                    </a>
                  ))}
                </ul>
            </div>
            
            
        </div>
        <p className=" absolute bottom-3 text-violet-200 text-base ">© 2025 Chaitany Mishra. All rights reserved.</p>
    </footer>
  )
}

export default Footer
