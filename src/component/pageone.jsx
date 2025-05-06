import { useEffect } from "react";
import Header from "./header";
import whitefox from "../imgs/whitefox.jpg"
export const PageOne = () => {
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

  return (
    <section className="md:w-screen h-full md:min-h-screen overflow-x-hidden bg-gray-950 pt-10 overflow-hidden">
      <div>
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6 md:pl-11 pt-10 md:pt-20 flex flex-col justify-center">
            <h4 className="texts  text-green-400 [text-shadow:_0_0_10px_rgba(255,255,255,0.6)] block pb-3 text-xl md:text-2xl">
              Hello
            </h4>
            <div className="border-2 w-1/4 md:w-1/3 border-b-green-400 mb-4"></div>
            <h1 className="texts text-white text-3xl md:text-6xl pb-6 pt-6 [text-shadow:_0_0_4px_rgba(255,255,255,0.6)]">
              Mohammad Muzammil
            </h1>
            <p className="texts text-blue-200 text-sm md:text-base [text-shadow:_0_0_5px_rgba(255,255,255,0.6)]">
              A passionate BCA student and self-taught developer specializing in
              React Native and the MERN Stack (MongoDB, Express.js, React.js,
              Node.js). I enjoy building responsive and user-friendly mobile
              apps and web applications. Always exploring new technologies to
              stay updated in the evolving tech landscape.
            </p>
          </div>

          <div  className=" texts flex justify-center items-center w-full h-full mt-10 md:mt-10">
            <img
              className=" mb-20 md:w-90 md:h-90 h-50 w-50 md:mb-10  object-cover rounded-lg shadow-md"
              src={whitefox}
              alt="profile"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};
