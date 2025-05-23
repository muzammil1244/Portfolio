import { Element } from "react-scroll"
import img1 from "../imgs/Screenshot (86).png"
import img2 from "../imgs/Screenshot (88).png"

import img3 from "../imgs/Your paragraph text (3).png"

export const FPage = () => {
    return (
        <section className="w-screen md:h-screen h-full md:py-0 py-10  bg-gray-950">
<Element name="Certification">
    <h1  className="text-green-500 text-3xl font-serif  text-center ">CERTIFICATION</h1>           
</Element>

 <div className=" mt-10 justify-self-center grid grid-cols-1 gap-10 md:flex md:justify-around md:mt-30 md:h-full">
    <div className="logo scaleeffect rounded-2xl overflow-hidden w-80 h-60 duration-500 md:w-2/7 md:h-64">
        <img className=" md:w-full md:h-full" src={img1} alt="" />
                </div>
               

                <div className="logo scaleeffect rounded-2xl overflow-hidden w-80 h-60 duration-500 md:w-2/7 md:h-64">
                <img className="md:w-full md:h-full overflow-hidden h-full" src={img2} alt="" />

                </div>

              <div className=" logo scaleeffect rounded-2xl overflow-hidden w-80 h-60 duration-500 md:w-2/7 md:h-64">
      <img className="md:w-full md:h-full " src={img3} alt="" />
                </div>  

                
            </div>
        </section>
    )
}
