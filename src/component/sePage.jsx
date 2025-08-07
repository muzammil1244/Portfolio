import { useEffect } from "react";
import { Element } from "react-scroll";

import laptopimg from "../imgs/goran-ivos-iOykDIkZLQw-unsplash.jpg";
import prone from "../imgs/skillbridge.png"
import pron2 from "../imgs/Screenshot (104).png"
import pron3 from "../imgs/Screenshot (97).png"


import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const SePage = () => {
  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show2r");
        } else {
          entry.target.classList.remove("show2r");
        }
      });
    });

    document.querySelectorAll(".text2r").forEach((el) => observers.observe(el));
  }, []);



  return (
    <section  className="px-4 flex flex-col items-center my-10  md:my-40 dark:text-text-color text-black">
      {/* Summary Section */}
      <div className="max-w-4xl md:flex md:flex-row flex-col md:h-screen gap-20 mx-auto  md:mb-16">
        <Element name="About"></Element>
        <img className="w-80 rounded-2xl h-60 mb-5 md:mb-0" src={laptopimg} alt="" />
        <div className=" md:w-1/2 texts w-full ">
          <h1 className="text-green-400 text-sm text-center font-bold">about me </h1>
          <h1 className="text-black dark:text-text-color   text-xl font-extrabold font-mono ">Crafting MERN Stack Solutions from Aurangabad  </h1>
          <p className=" break-words dark:text-secondary-text-color ">I'm Mohammad Muzammil – a self-driven developer with a strong command of the MERN Stack and React Native. I love building responsive, clean, and user-friendly web and mobile applications. I believe in continuous learning and constantly strive to stay updated with the latest in tech. Whether it's crafting intuitive UIs or
            writing scalable backend code, I aim to deliver impactful digital solutions.</p>
        </div>
      </div>

      {/* Projects Section */}
       <Element name="Projects" className="pt-24 scroll-mt-24">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-gray-600 text-3xl dark:text-text-color font-mono mb-12 text-center">
          The <span className="text-green-400 ">Project</span>  with Problem Solving Concept
        </h1>

        {/* Project 1 */}
        <div className="max-w-5xl w-full mb-16 md:grid md:grid-cols-2 gap-10 items-center px-4">
<div className="relative group w-full max-w-md overflow-hidden rounded-md shadow-lg">
  <img
    src={prone}
    alt="Project"
    className="w-full  h-60 md:object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Shutter Overlay */}
  <div className="absolute inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
    <div className="flex gap-6">
      {/* GitHub Link */}
      <a
        href="https://github.com/muzammil1244/skillbridge"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
        <FaGithub/>
      </a>

      {/* Live Link */}
      <a
        href="https://skillbridge-inky.vercel.app/employer/home"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
<LuLink/>

      </a>
    </div>
  </div>
</div>
          <div className="bg-gray-100 mt-7 md:mt-0 p-5 hover:scale-105 duration-300 hover:shadow-2xl shadow-gray-300 rounded-md flex flex-col gap-3 items-center text-center">
            <h2 className="text-xl font-bold text-blue-900">SkillBridge Internship Platform</h2>
            <p className="text-gray-700 text-sm">
              SkillBridge is a simple job and internship platform for students and freshers. They can make a profile,
              find jobs, and apply. Employers can post jobs, manage applications, and chat with users.
            </p>
            <div className="flex gap-5 text-xl">
              <a className="hover:bg-gray-500 duration-300 hover:px-5 py-[2px] rounded-lg  hover:text-gray-300 " href="https://github.com/muzammil1244/skillbridge" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="hover:bg-gray-500 duration-300 hover:px-5 py-[2px]  hover:text-gray-300 rounded-lg "  href="https://skillbridge-inky.vercel.app/employer/home" target="_blank" rel="noopener noreferrer">
                <LuLink />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="max-w-5xl w-full mb-16 md:grid md:grid-cols-2 gap-10 items-center px-4">
<div className="relative group w-full max-w-md overflow-hidden rounded-md shadow-lg">
  <img
    src={pron2}
    alt="Project"
    className="w-full h-60 md:object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Shutter Overlay */}
  <div className="absolute inset-0 bg-green-300/50 bg-opacity-70 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
    <div className="flex gap-6">
      {/* GitHub Link */}
      <a
        href="https://github.com/muzammil1244/Job-Portal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
        <FaGithub/>
      </a>

      {/* Live Link */}
      <a
        href="https://lnkd.in/dckZf4BQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
<LuLink/>

      </a>
    </div>
  </div>
</div>          <div className="bg-green-100 mt-7 md:mt-0 p-5 rounded-md flex hover:scale-105 duration-300 hover:shadow-2xl shadow-green-300 hover:px-5 flex-col gap-3 items-center text-center">
            <h2 className="text-xl font-bold text-blue-900">Job Portal Backend</h2>
            <p className="text-gray-700 text-sm">
              Job Portal built using Node.js, Express.js, and MongoDB! This application provides a seamless experience
              for users looking to manage job postings.
            </p>
            <div className="flex gap-5 text-xl">
              <a className="hover:bg-green-500 duration-300 hover:px-5 py-[2px] rounded-lg  hover:text-green-100 "  href="https://github.com/muzammil1244/Job-Portal" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="hover:bg-green-500 duration-300 hover:px-5 py-[2px] rounded-lg  hover:text-green-100 "  href="https://lnkd.in/dckZf4BQ" target="_blank" rel="noopener noreferrer">
                <LuLink />
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="max-w-5xl w-full mb-16 md:grid md:grid-cols-2 gap-10 items-center px-4">
<div className="relative group w-full max-w-md overflow-hidden rounded-md shadow-lg">
  <img
    src={pron3}
    alt="Project"
    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
  />

  {/* Shutter Overlay */}
  <div className="absolute inset-0 bg-black/50 bg-opacity-70 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
    <div className="flex gap-6">
      {/* GitHub Link */}
      <a
        href="https://github.com/muzammil1244/Smart_buy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
        <FaGithub/>
      </a>

      {/* Live Link */}
      <a
        href="https://www.linkedin.com/posts/muzammil1244_reactnative-ecommerce-mobileappdevelopment-activity-7280887211334520832-7F0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjwJckBHzSIvtlRB79cufGWu32yKq7E1DE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl hover:text-gray-300"
      >
<LuLink/>

      </a>
    </div>
  </div>
</div>          <div className="bg-gray-200 mt-7 md:mt-0 p-5 hover:scale-105 duration-300 hover:shadow-2xl shadow-gray-300 rounded-md flex flex-col gap-3 items-center text-center">
            <h2 className="text-xl font-bold text-blue-900">SmartBuy Ecommerce App</h2>
            <p className="text-gray-700 text-sm">
              A full-featured eCommerce mobile app built using React Native. Allows users to browse, order, and manage
              products with smooth UI/UX.
            </p>
            <div className="flex gap-5 text-xl">
              <a className="hover:bg-gray-500 duration-300 hover:px-5 py-[2px] rounded-lg  hover:text-gray-300 "  href="https://github.com/muzammil1244/Smart_buy" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a className="hover:bg-gray-500 duration-300 hover:px-5 py-[2px] rounded-lg  hover:text-gray-300 " 
                href="https://www.linkedin.com/posts/muzammil1244_reactnative-ecommerce-mobileappdevelopment-activity-7280887211334520832-7F0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjwJckBHzSIvtlRB79cufGWu32yKq7E1DE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
    </section>
  );
};
