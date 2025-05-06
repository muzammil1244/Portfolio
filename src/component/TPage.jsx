import { useEffect } from "react"
import { Element } from "react-scroll"
import img1 from "../imgs/mongodb.png"
import img2 from "../imgs/express-js-icon.png"

import img3 from "../imgs/react.png"
import img4 from "../imgs/node-js.png"
import img5 from "../imgs/html-icon.png"
import img6 from "../imgs/icons8-tailwind-css-48.png"
import img7 from "../imgs/javascript-programming-language-icon.png"
import img8 from "../imgs/python-programming-language-icon.png"
import img9 from "../imgs/postman-icon.png"
import img10 from "../imgs/redux-icon.png"


 export const TPaeg=()=>{

    useEffect(()=>{
    
    const observers = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            console.log(e)
            if(e.isIntersecting){
                e.target.classList.add("show2")
            }else{
                e.target.classList.remove("show2")
    
    
            }
        })
    })

    /*logos <scroll>*/

    const observerss = new IntersectionObserver((entry)=>{
        entry.forEach((e)=>{
            console.log(e)
            if(e.isIntersecting){
                e.target.classList.add("show22")
            }else{
                e.target.classList.remove("show22")
    
    
            }
        })
    })
    
    const logo = document.querySelectorAll(".logo")

    logo.forEach(element => {
        observerss.observe(element)
        
    });


            const textids = document.querySelectorAll(".text2")
            textids.forEach(element => {
                observers.observe(element)
            });
        },[])

    return(
        <div className="w-screen pb-8 h-full md:pb-20 md:h-250 bg-gray-950 overflow-hidden ">

<div className="md:w-1/3 w-full justify-self-end text-end md:mr-50  ">
<Element name="Skills"><h1 className=" texts text-center text-green-400 mb-10 ">
 Skill Summary for Portfolio

</h1></Element>

<p className= "text2 md:w-full text-center text-start  md:text-end md:px-0 px-7 text-blue-50 ">
I am a MERN Stack Developer with a solid understanding of MongoDB, Express.js, React.js, and Node.js.
         I enjoy building dynamic and responsive web applications with clean UI and efficient backend logic.
          I'm passionate about coding, problem-solving,and continuously learning new technologies to improve
           my skills and deliver better user experiences.
     
</p>

</div>


<div className="h-75  w-0 border-1 border-blue-50 md:block hidden relative bottom-60 left-70"></div>


<div className=" grid  grid-cols-2 gap-10 justify-self-center mt-10  md:w-150 md:h-full md:flex md:justify-around relative md:right-70 md:bottom-63 "> 

<div className="  logo transition-transform duration-150  de w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img1} alt="" />
    <h1 className="text-2xl text-green-600">M</h1>
</div>

<div className=" logo  transition-transform duration-300   w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img2} alt="" />
    <h1 className="text-2xl text-yellow-400">E</h1>
</div>

<div className=" logo  transition-transform duration-500   w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img3} alt="" />
    <h1 className="text-2xl text-blue-300">R</h1>
</div>

<div className=" logo   transition-transform duration-1000    w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img4} alt="" />
    <h1 className="text-2xl text-green-800">N</h1>
</div>




</div>

<div className="  text2 relative w-full px-4 md:px-0 md-mt-0 mt-10  md:w-2/4 md:left-110 md:bottom-250 md:text-end ">
    <h1 className=" text-2xl text-green-600">additional</h1>
    <p className="  text-blue-50">I am a passionate front-end developer with hands-on experience in Python,
 HTML, Tailwind CSS, Redux, and React Native. I specialize in building responsive
  and user-friendly mobile applications and web interfaces. I enjoy solving real-world problems through
 clean and efficient code and am always eager to learn and work on challenging projects.</p>
</div>

<div className="  md:mt-0 mt-40 md:h-60 md:flex md:flex-col md:justify-around md:relative md:bottom-210">
<div className=" mt-10 grid  grid-cols-2 gap-10 justify-self-center md:top-0 md:w-150 md:h-full md:mt-10 md:flex md:justify-around relative md:left-14 md:bottom-90 "> 

<div className="logo  w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img5} alt="" />
</div>

<div className="logo  w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img6} alt="" />
</div>

<div className="logo   w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img7} alt="" />
</div>

<div className=" logo  w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img8} alt="" />
</div>




</div>
<div className=" md:mt-0 mt-10 grid  grid-cols-2 gap-10 justify-self-center m md:w-75 md:h-full md:flex md:justify-around md:relative md:left-51 md:bottom-55 "> 

<div className="logo  w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img9} alt="" />
</div>

<div className="logo   w-25 h-25 bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
    <img className="w-15 h-15 scaleeffect" src={img10} alt="" />
</div>






</div>
</div>






<div className="h-74 w-0 border-1 md:block hidden   border-blue-50 relative bottom-367 left-70"></div>




        </div>
    )
}