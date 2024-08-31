"use client"
import { useEffect, useRef, useState } from "react";
import ChevronRight from "../snippets/ChevronRight";

export default function SideMenu({isMenu2}:{isMenu2:boolean}){
    let mobileMenu=useRef<HTMLDivElement | null>(null);
    let [isMenu,setIsMenu]=useState(false);
    let overlay=useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        console.log(isMenu2)
       if(!isMenu2){
        mobileMenu.current?.classList.remove("left-0");
        mobileMenu.current?.classList.add("-left-2/3")
        overlay.current?.classList.remove("opacity-100");
        overlay.current?.classList.add("opacity-0");
        document.body.style.overflow="unset"
        console.log("no")
       }else{
        mobileMenu.current?.classList.remove("-left-2/3");
            mobileMenu.current?.classList.add("left-0")
            overlay.current?.classList.remove("opacity-0");
            overlay.current?.classList.add("opacity-100");
            document.body.style.overflow="hidden"
        console.log("yes")
       }
        
    },[isMenu2])
    return(
        
<div className="w-full min-h-40 h-screen absolute top-0 left-0 bg-white z-20 flex 
              flex-col transition-all duration-500 ease-out opacity-0 sm:hidden overflow-y-auto
              " ref={overlay} >
               
                <div className="w-2/3 bg-emerald-200 h-full flex flex-col relative
              overflow-y-clip -left-2/3 transition-all duration-700 ease-out
                " ref={mobileMenu}>
                     <div className="w-full h-40 hai2">

</div>
                  <ul className="">
                    <li className="flex justify-between items-center px-7 font-semibold text-gray-700 my-3">Shop <ChevronRight width="16" height="16" bg="text-gray-700"/></li>
                    <li className="flex justify-between items-center px-7 font-semibold text-gray-700 my-3">Blog <ChevronRight width="16" height="16" bg="text-gray-700"/></li>
                    <li className="flex justify-between items-center px-7 font-semibold text-gray-700 my-3">About Us <ChevronRight width="16" height="16" bg="text-gray-700"/></li>
                  </ul>
                  <div className="buttons text-center my-10">
                    <button className="border border-solid border-emerald-500 text-emerald-500 font-semibold px-3 py-1 mx-auto rounded inline-block">Sign up</button>
                  </div>
                  {/* <div className="h-40  mt-auto relative overflow-hidden
                  after:content-[''] after:w-full after:h-full after:top-16 after:bg-emerald-100 after:absolute after:-rotate-12 after:scale-125
                  "> */}
                  <div className="grow hai  min-h-20 relative 
                  ">

</div>
                </div>



              </div>
         
    )
}