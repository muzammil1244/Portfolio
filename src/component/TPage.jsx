import { useEffect } from "react";
import { Element } from "react-scroll";

import img1 from "../imgs/mongodb.png";
import img2 from "../imgs/express-js-icon.png";
import img3 from "../imgs/react.png";
import img4 from "../imgs/node-js.png";
import img5 from "../imgs/html-icon.png";
import img6 from "../imgs/icons8-tailwind-css-48.png";
import img7 from "../imgs/javascript-programming-language-icon.png";
import s1 from "../imgs/git.png";
import s2 from "../imgs/native.png"
import s3 from "../imgs/postman-icon.png"
import s4 from "../imgs/vs code .png"
import img9 from "../imgs/postman-icon.png";
import img10 from "../imgs/redux-icon.png";

import { BiBriefcase, BiCalendar, BiCalendarCheck, BiLinkAlt } from "react-icons/bi";
import { MdDeveloperMode, MdSubject } from "react-icons/md";
import { SiEducative, SiHyperskill } from "react-icons/si";
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGraduationCapThin } from "react-icons/pi";
import { FcBarChart, FcExport, FcGraduationCap } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

export const TPaeg = () => {
  useEffect(() => {
    const observers = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show2");
        } else {
          e.target.classList.remove("show2");
        }
      });
    });

    const observerss = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show22");
        } else {
          e.target.classList.remove("show22");
        }
      });
    });

    document.querySelectorAll(".text2").forEach((el) => observers.observe(el));
    document.querySelectorAll(".logo").forEach((el) => observerss.observe(el));
  }, []);

  return (
    <section dat-theme='dark' className="w-screen mb-10 md:mb-0 h-fit flex flex-col justify-around items-center dark:bg-bg-dark  bg-white  ">
      <Element name="Skills">
        <h1 className=" w-full pt-10 md:text-4xl text-xl  dark:text-text-color text-gray-800 justify-center  flex items-center gap-4 mb-8"><FaCode className="text-green-400 animate-pulse size-5 md:size-10"/> Skill   <span className="text-gray-500">Summary</span> </h1>
    

      

      {/* MERN STACK LOGOS */}
      <div className="w-full md:max-w-4xl mb-10 md:mb-0 mx-auto md:h-screen flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-center py-10 px-4 gap-10">

  {/* Grid of Letters M E R N */}
  <div className="grid md:pl-5 lg:pl-0  grid-cols-2 grid-rows-2 w-full md:w-1/2 gap-5 place-items-center md:col-span-1">
    <div className="flex hover:scale-102 duration-200 shadow-green-300  flex-col gap-2 items-center justify-center w-24 h-24 bg-green-50 shadow-2xl">
      <img src={img1} alt="" className="w-8 h-8" />
      <h1>M</h1>
    </div>

    <div className="flex  hover:scale-102 duration-200 shadow-yellow-300 flex-col gap-2  items-center justify-center w-24 h-24 bg-yellow-50 shadow-2xl">
      <img src={img2} alt="" className="w-8 h-8" />
      <h1>E</h1>
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200 shadow-blue-300 justify-center w-24 h-24 bg-blue-50 shadow-2xl">
      <img src={img3} alt="" className="w-8 h-8" />
      <h1>R</h1>
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200 shadow-green-400   justify-center w-24 h-24 bg-green-100 shadow-2xl">
      <img src={img4} alt="" className="w-8 h-8" />
      <h1>N</h1>
    </div>
  </div>

  {/* Text Section */}
  <div className="md:col-span-1  flex text2r  flex-col justify-center items-center text-center">
    <h1 className="font-extrabold dark:text-text-color text-xl mb-4">MERN Stack</h1>
    <p className="text-sm  text-black text-secondary-text-color  max-w-md">
      <i>I</i> work with MongoDB, Express.js, React.js, and Node.js.<br />
      And yes, I can say that I will be a pro.<br />
      I focus on clean design and strong backend logic.<br />
      I learn every single day, love solving problems, and always look for new things to improve myself and create better user experiences.
    </p>
  </div>
</div>


      {/* Additional Skills Section */}

      <div className=" max-w-4xl mb-10 md:mb-0  flex md:flex-row gap-6 flex-col-reverse md:justify-around  md:h-screen  items-center  ">
 <div className="  md:px-0 px-2 text2  md:w-1/2 col-span-1  ">
 <h1 className="text-center mb-3 dark:text-text-color font-extrabold"> Frontend & UI Skills </h1>
            <p className="    text-center text-sm dark:text-secondary-text-color text-black ">
    I have experience with Tailwind CSS, JavaScript, and Redux.
I use Tailwind for responsive UI, JavaScript for interactivity, and Redux to manage app state smoothly.

.
      </p>
        </div>
        
        <div className="grid grid-cols-2 grid-rows-2 md:w-1/4 gap-5 place-items-center md:col-span-1">
    <div className="flex hover:scale-102  duration-200 shadow-orange-300 bg-orange-50 flex-col gap-2 items-center justify-center w-24 h-24 bg-greeb-50 shadow-2xl">
      <img src={img5} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102  duration-200 shadow-blue-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-blue-50 shadow-2xl">
      <img src={img6} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102 duration-200  shadow-yellow-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-yellow-50 shadow-2xl">
      <img src={img7} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102 duration-200  shadow-purple-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-purple-100 shadow-2xl">
      <img src={img10} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>
  </div>


        

       
      
      
      </div>
    
   {/* 2 Additional Skills Section */}


  <div className=" max-w-4xl  flex md:flex-row-reverse  flex-col-reverse md:justify-between  md:h-screen  items-center  ">
 <div className="  md:px-0 px-2 mt-5 md:m-0 text2r md:w-1/2 col-span-1  ">
 <h1 className="text-center dark:text-text-color mb-3 font-extrabold"> App & UI Skills </h1>
            <p className=" dark:text-secondary-text-color   text-center text-sm text-black ">
   I have practical experience working with Git, React Native, and Postman. These tools help me
    efficiently build mobile applications, manage code versions, and test APIs during development.

.
      </p>
        </div>
        
        <div className="grid grid-cols-2 grid-rows-2 md:w-1/4 gap-5 place-items-center md:col-span-1">
    <div className="flex flex-col hover:scale-102 duration-200 shadow-blue-400 gap-2 items-center justify-center w-24 h-24 bg-blue-100 shadow-2xl">
      
            <img src={s4} alt="" className="w-8 h-8" />

      
      <h1></h1>
    </div>

    <div className="flex hover:scale-102  duration-200 shadow-red-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-red-50 shadow-2xl">
      <img src={s1} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102  duration-200 shadow-blue-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-blue-50 shadow-2xl">
      <img src={s2} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102  duration-200 shadow-orange-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-orange-100 shadow-2xl">
      <img src={s3} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>
  </div>


        

       
      
      
      </div>

      </Element>

<Element name="Education">
  <div className="min-h-screen w-full flex  justify-center items-start px-4 md:px-8 lg:px-20 py-10">
    <div className="max-w-4xl w-full">

      {/* Heading */}
      <h1 className="font-mono text-2xl md:text-4xl dark:text-text-color text-gray-800 mb-10 flex justify-center items-center gap-3">
        <FcGraduationCap /> Education
      </h1>

      {/* Card Container */}
      <div className="w-full flex flex-col  shadow-xl dark:bg-card-color bg-white hover:scale-[1.01] duration-500 hover:shadow-2xl rounded-2xl p-5 gap-6">

        {/* Top Row: Degree and College */}
        <div className="flex flex-col sm:flex-row justify-between gap-6">

          {/* Left Info */}
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center gap-3 text-lg md:text-xl dark:text-text-color">
              Bachelor of Computer Applications (BCA)
              <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-md">Current</span>
            </h1>
            <a href="https://maca.ac.in/"  className="text-base flex items-center  md:text-lg font-serif dark:text-text-color"> <span className=" border-b dark:border-secondary-text-color ">M</span>aulana Azad College <BiLinkAlt className="md:size-5 size-2 "/></a>
          </div>

          {/* Right Info */}
          <div className="flex flex-col items-start sm:items-end text-sm gap-2">
            <h3 className="flex items-center gap-2 dark:text-secondary-text-color">
              <BiCalendar /> 2023
            </h3>
            <p className="dark:text-secondary-text-color">Final year student</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed dark:text-text-color">
          Comprehensive program covering computer science fundamentals, programming languages, 
          database management, and software engineering principles. I’m currently pursuing BCA from Maulana Azad College, Aurangabad. I’m learning programming, web and app development, and working on real-world projects using React Native and the MERN Stack. I enjoy learning new things and aim to become a full-stack developer who solves real problems with technology.
        </p>

        {/* Subjects */}
        <div className="mt-4">
          <h1 className="flex items-center gap-2 font-serif dark:text-text-color text-lg">
            <HiOutlineBookOpen /> Key Subjects
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm font-mono">
            {[
              "Data Structures",
              "Algorithms",
              "Database Management",
              "Software Engineering",
              "Web Development",
              "Operating Systems"
            ].map((subject, i) => (
              <span key={i} className="px-3 py-1 text-center rounded-2xl bg-blue-50 dark:bg-border-color dark:text-secondary-text-color">
                {subject}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</Element>
  

<Element name="Experience">
  <div className="w-screen mt-10 flex justify-center items-center px-4 md:px-8 lg:px-20">
    <div className="max-w-4xl w-full">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold dark:text-text-color text-gray-800 flex flex-wrap items-center gap-3">
        Work <span className="text-gray-500">Experience</span>
      </h1>

      {/* Card Container */}
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-full dark:bg-card-color dark:px-6 dark:py-5 p-4 bg-white rounded-2xl shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col gap-6">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* Left */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold flex items-center gap-3 dark:text-text-color">
                <FaBriefcase className="text-gray-500 animate-bounce" />
                Open to Work 
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
              </h1>
              <p className="text-sm dark:text-text-color">Looking for long time opportunities</p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <p className="flex items-center gap-2 text-sm dark:text-secondary-text-color">
                <SlCalender /> Available Now
              </p>
              <span className="text-xs px-3 py-1 rounded-2xl bg-blue-50 dark:bg-border-color text-gray-600 dark:text-secondary-text-color border border-blue-200 dark:border-gray-600">
                Full-time
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm dark:text-secondary-text-color">
            Actively seeking opportunities as a Full-Stack Developer 
            to contribute to innovative projects and grow my skills in a collaborative environment.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"].map((tech, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-2xl bg-blue-50 dark:bg-border-color text-gray-700 dark:text-secondary-text-color">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
</Element>


 



    </section>
  );
};
