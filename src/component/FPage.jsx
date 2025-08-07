import { Element } from "react-scroll";
import img2 from "../imgs/Udemy 2.png";
import img3 from "../imgs/Udemy 1.png";
import { useState } from "react";

export const FPage = () => {
  const [getimg, setimg] = useState(img2);

  return (
    <section  className="w-full flex flex-col items-center h-screen dark:bg-bg-dark bg-white py-15 px-4">
      <Element name="Certification">
        <h1 className="text-gray-400 dark:text-text-color font-mono text-2xl font-bold text-center mb-10 tracking-wider">
          Certifications
        </h1>
      </Element>

      <div className="max-w-4xl w-full  flex flex-col md:flex-row gap-6 dark:shadow-2xl dark:shadow-green-300 bg-green-200 md:h-screen rounded-xl overflow-hidden">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-2 md:px-0">
          <img
            className="rounded-br-3xl border-white border-b-[15px] border-r-[15px] max-w-full h-auto"
            src={getimg}
            alt="Certificate"
          />
        </div>

        {/* Right: Buttons */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start px-2 md:px-0">
          <div className="flex flex-col border-l-[15px] border-b-[15px] border-white rounded-bl-2xl bg-white shadow-sm w-full md:w-fit">
            <h1
              onClick={() => setimg(img2)}
              className="text-center font-mono text-sm px-4 hover:bg-blue-50 cursor-pointer pt-2 py-3 w-full border-b-2 border-gray-200"
            >
              React Native
            </h1>
            <h1
              onClick={() => setimg(img3)}
              className="text-center font-mono text-sm px-4 hover:bg-blue-50 cursor-pointer pt-2 py-3 w-full border-b-2 border-gray-200"
            >
              React JS
            </h1>
          </div>
        </div>
      </div>


    </section>
  );
};
