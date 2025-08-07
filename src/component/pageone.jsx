import { useEffect, useState } from "react";
import Header from "./header";
import whitefox from "../imgs/whitefox.jpg";
import github from "../imgs/github-logo.png"
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaDownload, FaBars, FaTimes, FaTwitter, FaGithub, FaStreetView, FaItunesNote, FaRegFileAlt } from "react-icons/fa";
import { SePage } from "./sePage";
import { TPaeg } from './TPage';
import { FPage } from './FPage';
import { Six } from './Six';
import { BiArrowToTop, BiDownload } from "react-icons/bi";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
import { Link } from "react-scroll";
import {Element} from "react-scroll";

export const PageOne = () => {

  const [gettheme,settheme] = useState("")
  useEffect(() => {

    const observer = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
        } else {
          e.target.classList.remove("show");
        }
      });
    });

    const textid = document.querySelectorAll(".texts");
    textid.forEach((element) => {
      observer.observe(element);
    });
  }, []);

useEffect(()=>{
const data = localStorage.getItem("theme") || "light"
settheme(data)
},[])

console.log("dark theme ",gettheme)

  return (

    <section data-theme={gettheme === "dark"?"dark":""} className="w-full h-full   dark:bg-bg-dark  bg-white dark:bg-gray-95 overflow-x-hidden ">
      <Header/>
<Element name="Home"></Element>
      <div className="grid  grid-cols-1 w-screen mt-30 md:mt-0 md:h-screen  md:grid-cols-2 gap-8 px-10 lg:px-60 md:px-30  py-10 md:py-24">
        <div className="md:flex fixed hidden md:block   flex-col left-10 top-30 gap-7 items-center ">
          <a className="text-black dark:text-secondary-text-color hover:scale-115 duration-100 size-5" href="https://www.linkedin.com/in/muzammil1244">      
            
                <FaLinkedin  className="text-black hover:scale-105  dark:text-secondary-text-color duration-100 size-5"/>
</a>
         <a href="https://x.com/MohammadMu47824"><FaTwitter className="text-black dark:text-secondary-text-color hover:scale-115 duration-100 size-5"/></a> 
         <a href="https://github.com/muzammil1244"><FaGithub className="text-black dark:text-secondary-text-color hover:scale-115 duration-100 size-5"/></a> 
         <a href=""><MdEmail className="text-black dark:text-secondary-text-color size-5"/></a>
          
         <a href="./public/ats resume 2.pdf"   download="Mohammad_Muzammil_Resume.pdf"
><BiDownload className="text-black hover:scale-115 dark:text-secondary-text-color duration-100 size-5"/></a> 
        </div>

        {/* Left: Texts */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4  className=" texteff text-black text-2 dark:text-text-color md:text-3xl mb-2 ">
            <span className="text-green-600">M</span> <span className="text-yellow-300">E</span> <span className=" text-blue-400"> R</span> <span className="text-green-700">N</span>  STACK <br/>
            Developer
          </h4>
         
          <p className=" text-gray-400 text-sm md:text-base leading-relaxed md:max-w-lg">
Hi, I'm Mohammad Muzammil – a self-taught developer skilled in MERN Stack & React Native. I build responsive web and mobile apps, always learning and evolving.

       </p>
        <div className="flex items-center mt-4 gap-3">
            <a
              href="https://github.com/muzammil1244"
              download="github"
              className="flex items-center text dark:text-text-color  size-5 transition text-sm"
            >
<FaGithub/>            </a>
            <a
              href="https://www.linkedin.com/in/muzammil1244"
              target="_blank"
              rel="noopener noreferrer"
              className=" items-center dark:text-text-color      hover:text-blue-700 transition text-sm"
            >
              <FaLinkedin className=" size-5" />
            </a>
             <a href="ats resume 2.pdf"   
><FaRegFileAlt className="text-black hover:scale-115 dark:text-secondary-text-color duration-100 size-4"/></a> 
          </div>
        </motion.div>
  
       
      </div>
      <SePage/>
      <TPaeg/>
      <FPage/>
      <Six/>
      <div className="w-full text-gray-300  flex justify-between md:justify-around text-[10px] md:text-sm items-center  bottom-0 bg-black h-30 px-3 md:px-20"><h1>© Muzammil 2025 — Let’s connact & create something amazing! </h1>

<a   href="/ats resume 2.pdf"
  download="Mohammad_Muzammil_Resume.pdf"

 className=" text-white hover:text-blue-50 cursor-pointer fontbold" >Download resume</a>
</div>      

<div className="fixed bottom-10 right-10 hover:scale-109 hover:bg-blue-50 bg-white shadow-lg 0 w-7 rounded-full flex justify-center items-center  h-7">
<Link   smooth={true}
    duration={700} to="Home"   >
 <BiArrowToTop/>
</Link>
</div>


    </section>
  );
};
