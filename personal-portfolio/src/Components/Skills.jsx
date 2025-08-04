export default function Skills(){
    return(
        <>
    <h2 className=" text-center text-violet-200 pt-16 text-3xl font-semibold italic">
        Skills
      </h2>
      <div>
        <h2 className="text-xl text-center mt-8 text-violet-200">
          Technical Skills:
        </h2>
        <ul className=" text-violet-200 flex gap-5 justify-center pt-4 items-center ">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript(ES6+)</li>
          <li>TailwindCSS</li>
          <li>C programming</li>
          <li>C++</li>
          <li>Python</li>
        </ul>
        <h2 className="text-xl text-center text-violet-200 mt-3">Soft Skill</h2>
        <ul className=" text-violet-200 flex gap-5 justify-center pt-4 items-center ">
          <li> Emotional Intelligence (EQ)</li>
          <li>Growth Mindset</li>
          <li> Effective Communication</li>
          <li>Self-Awareness</li>
          <li>Learning Initiative</li>
          <li> Attention to Detail</li>
        </ul>
        <h2 className="text-xl text-violet-200 text-center mt-3">
          Tools & Technology
        </h2>
        <ul className=" text-violet-200 flex gap-5 justify-center  pt-4 items-center ">
          <li>Stripe API</li>
          <li>Open API</li>
          <li>Socket.IO</li>
          <li>ESLint</li>
          <li> Prettier</li>
          <li>Postman</li>
          <li>Git</li>
          <li>Git Hub</li>
        </ul>
      </div>
      </>
    )
}