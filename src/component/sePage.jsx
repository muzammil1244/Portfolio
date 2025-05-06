import { useEffect } from "react";
import { Element } from "react-scroll";
import img1 from "../imgs/Now! (2).png"
import img2 from "../imgs/collection.png"
import img3 from "../imgs/Now! (1).png"


export const SePage = () => {
  useEffect(() => {
    const observers = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        console.log(e);
        if (e.isIntersecting) {
          e.target.classList.add("show2r");
        } else {
          e.target.classList.remove("show2r");
        }
      });
    });

    const textids = document.querySelectorAll(".text2r");
    textids.forEach((element) => {
      observers.observe(element);
    });
    
  }, []);

  return (
    <section className=" w-full overflow-x-hidden md:overflow-hidden md:w-screen h-full md:h-550 bg-gray-950">
      <div className="w-1/2  border-b-1 border-l-1 border-r-1 border-white h-4 justify-self-center"></div>

      <div className="md:w-1/2 w-full px-5 justify-self-start md:justify-self-center   mt-20">
        <div>
          <h3 className="texts text-blue-200 text-xl md:text-2xl">something about me </h3>
          <div className="border-1 w-1/3 border-blue-200 mt-4"></div>
        </div>

        <div className="mt-4">
          <h1 className="text2 text-2xl md:text-7xl text-blue-200">Summary</h1>
        </div>
        <div>
          <p className="texts text-blue-200 mt-10">
          Hi, I'm Moham Muzammil — a dedicated and self-motivated BCA student at Molana Azad College, Aurangabad, affiliated with Dr. Babasaheb Ambedkar Marathwada University. My primary interest lies in web development, where I actively build and explore modern technologies. I have hands-on experience with tools like Node.js, MongoDB, and React, and I also work with React Native for mobile app development. As a passionate self-learner, I constantly strive to stay updated with industry trends and enhance my problem-solving abilities. My goal is to become a Full Stack Developer with expertise in both frontend and backend technologies, including AI integration. I thrive in collaborative environments and am always ready to take on real-world challenges.          </p>
        </div>
      </div>

      <Element name="Projects">
        <div className="w-full h-screen mt-20 ml-7 md:mt-30 md:ml-45">
          <img className="text2r w-75 h-50  md:w-130 md:h-1/2" src={img1} alt="" />

          <div className="text-blue-200 relative md:w-1/3 md:bottom-60 md:left-45 md:text-end md:h-400">
            <h3 className="texts text-2xl text-green-400 mb-2">Project</h3>
            <a href="" className="text2r text-blue-200 text-2xl mb-3">
              Wheather Application
            </a>
            <p className="text2 w-80 md:w-full  text-indigo-100">
            Weather App is a React Native application that shows real-time weather information for any location. It includes current weather updates, hourly forecasts, and an interactive UI with animations. The app uses an open-source weather API to fetch data. Built with React Native CLI, it offers a smooth and responsive experience.          </p>

            <a className="text-green-400 underline" href="https://github.com/muzammil1244/weather_App">clickhere</a>
          </div>
        </div>
      </Element>

      <div className="w-full  md:mt-0 ml-7  h-screen md:ml-100">
        <img className="text2 w-75 h-50  md:w-130 md:h-1/2"  src={img2} alt="" />

        <div className="text-blue-200 relative md:w-1/3 md:bottom-60 md:right-23 md:text-start md:h-400">
          <h3 className="texts text-2xl text-green-400 mb-2">Project</h3>
          <a href="https://www.linkedin.com/posts/muzammil1244_nodejs-backenddevelopment-webdevelopment-activity-7292444304956907520-xJH6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjwJckBHzSIvtlRB79cufGWu32yKq7E1DE" className="text2r text-blue-200 text-2xl mb-3">
            Job Portal
          </a>
          <p className="text2r w-80 md:w-full text-indigo-100">  
                      I recently built a Job Portal using Node.js, Express.js, and MongoDB. It includes features like user authentication, job management, search/filter options, and secure RESTful APIs with JWT. The project is deployed on Render and helped me strengthen my backend development and API security skills.            </p>

          <a className="text-green-400 underline" href="https://github.com/muzammil1244/Job-Portal">clickhere</a>
        </div>
      </div>

      <div className="w-full h-screen ml-7 md:ml-45">
        <img className="text2r w-75 h-50  md:w-130 md:h-1/2" src={img3} alt="" />
        <div className="text-blue-200 relative md:w-1/3 md:bottom-60 md:left-45 md:text-end md:h-400">
          <h3 className="texts text-2xl text-green-400 mb-2">Project</h3>
          <a href="https://www.linkedin.com/posts/muzammil1244_reactnative-ecommerce-mobileappdevelopment-activity-7280887211334520832-7F0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjwJckBHzSIvtlRB79cufGWu32yKq7E1DE" className="text2 text-blue-200 text-2xl mb-3">
            Smart_Buy
          </a>
          <p className="text2 text-indigo-100 w-80 md:w-full">
          SmartBuy is a React Native e-commerce app with a smooth and modern UI.
It features product filtering, local storage, and secure user login.
Built with Redux, React Navigation, and Notifee for notifications.
API integration powers product data and authentication.

          </p>
          <a className="text-green-400 underline" href="https://github.com/muzammil1244/Smart_buy">clickhere</a>
        </div>
      </div>

      <div className="h-70 md:block hidden border-1 w-0 border-blue-200 absolute top-389 left-120"></div>
      <div className="h-70 md:block hidden border-1 w-0 border-blue-200 absolute top-537 left-140"></div>
      <div className="h-20 md:block hidden border-1 w-0 border-blue-200 absolute top-687 left-70"></div>
    </section>
  );
};
