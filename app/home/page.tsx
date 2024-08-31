"use client"
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ChevronRight from "../snippets/ChevronRight";
import { useRef, useState } from "react";
import SideMenu from "../components/sideMenu";
const inter = Inter({ subsets: ["latin"] });
export default function HomePageBanner(){
    let mobileMenu=useRef<HTMLDivElement | null>(null);
    let [isMenu,setIsMenu]=useState(false);
    let overlay=useRef<HTMLDivElement | null>(null)
    function showMenu(){
       if(isMenu){
        mobileMenu.current?.classList.remove("left-0");
        mobileMenu.current?.classList.add("-left-2/3")
        overlay.current?.classList.remove("opacity-100");
        overlay.current?.classList.add("opacity-0");
        document.body.style.overflow="unset"
        setIsMenu(false)
       }else if(!isMenu){
        mobileMenu.current?.classList.remove("-left-2/3");
        mobileMenu.current?.classList.add("left-0")
        overlay.current?.classList.remove("opacity-0");
        overlay.current?.classList.add("opacity-100");
        document.body.style.overflow="hidden"
        setIsMenu(true)
       }
    }

    return(
        <>
        <main className="_banner w-full  bg-white">
            <div className="main-box flex relative  sm:h-[650px] ">

                   {/* BIG LOGO STARTS HERE   */}
                   <div className="big_logo absolute top-16 right-6 w-20 sm:w-28 md:w-32 lg:w-40 z-10">
                        <img src="./logo_big.svg" alt="" />
                     </div>

                     {/* BIG LOGO ENDS HERE   */}
                <div className=" hidden sm:block plant w-1/3  h-full relative z-20">
                 <img src="./hero.png" alt=""  className="w-full h-full object-cover"/>
                </div>
                {/* SECOND BOX STARTS HERE  */}
                <div className="content-box w-full sm:w-2/3 flex flex-col sm:flex-row h-full bg-white relative justify-center items-center ">
                  
                {/* MOBILE NAVBAR STARTS HERE       */}
                <div className="mobile_menu h-16 w-full  sm:hidden relative z-30">
                <Navbar />
                </div> 
                {/* MOBILE NAVBAR ENDS HERE       */}


                      {/* LEFT RECTANGLE STARTS HERE   */}
                      <div className="bg-gray-100 w-60 h-60 -left-20 top-32 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rotate-45 sm:top-44 sm:-left-40 md:top-44 md:-left-20 lg:top-48 lg:-left-16  z-0 absolute">

                      </div>
                      {/* LEFT RECTANGLE ENDS HERE   */}

<div className="banner_text flex flex-col w-11/12 sm:w-full relative z-20 h-full justify-center items-center mt-8  sm:mt-0">
    <div className="md:w-full lg:w-11/12 flex   flex-col items-center px-8 sm:px-12 md:px-16 ">
    <h3 className="text-4xl  sm:text-5xl  md:text-5xl  lg:text-6xl xl:text-7xl relative font-bold w-full mt-4">
        Enhance your <br/>setup with botanical <span className="inline-block relative after:content-[''] after:absolute  after:-bottom-2 sm:after:-bottom-3 after:right-0 sm:after:right-1 md:after:right-3  after:w-full after:h-2 after:bg-emerald-500  md:after:inline-block sm:after:h-2"><pre className={inter.className}>decor  </pre> </span>
    </h3>
    <p className="sm:text-sm md:text-base  my-6 font-medium w-full text-gray-800"> But the best quality plants and plant accessories. Need help? Check out our blog or reach us out directly!</p>
    <div className="buttons flex gap-5 justify-start w-full mt-6">
        <button className="px-3 py-2 border border-solid border-emerald-500 bg-emerald-500 text-white  rounded hover:bg-emerald-600  sm:text-sm md:text-base">Explore the shop</button>
        <button className="px-3 py-2 bg-gray-100 font-medium text-black rounded hover:bg-gray-200 sm:text-sm md:text-base">Read our blog</button>
    </div>
    </div>
</div>

                </div>
            </div>
        </main>
        
        </>
    )
}