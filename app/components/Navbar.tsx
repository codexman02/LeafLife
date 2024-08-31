"use client"
import Link from "next/link";
import Logo from "./logo";
import { useRef, useState } from "react";
import SideMenu from "./sideMenu";

export default function Navbar({showMenu}:{showMenu?:()=>void}){
    let line1=useRef<HTMLSpanElement | null>(null);
    let line2=useRef<HTMLSpanElement | null>(null);
    let line3=useRef<HTMLSpanElement | null>(null);
    let [isMenu,setIsMenu]=useState(false);
    function openMenu(){
       if(showMenu){
        showMenu()
       }
        if(!isMenu){
            line1.current?.classList.add("rotate-45");
            line1.current?.classList.add("absolute");
            line3.current?.classList.add("-rotate-45");
            line3.current?.classList.add("absolute");
            line2.current?.classList.add("opacity-0");
            setIsMenu(true)
        }else{
            line1.current?.classList.remove("rotate-45")
            line1.current?.classList.remove("absolute")
            line3.current?.classList.remove("absolute")
            line3.current?.classList.remove("-rotate-45")
            line2.current?.classList.remove("opacity-0");
            setIsMenu(false)
        }
    }
    return(
        <>
        <div className="navbar w-full">
            <div className="flex justify-between px-1 sm:px-20 py-3 sm:py-4 relative">
                <div className="logo flex justify-center items-center px-5 sm:px-0 relative z-30"><Logo/><span className="text-gray-800 ml-3 text-2xl font-bold">Leaf</span>
                <span className="life text-2xl text-emerald-500 font-bold">Life</span>
                </div>
                {/* LOGO ENDS HERE   */}
                <div className="menu hidden sm:block">
                    <ul className="flex gap-7 justify-center items-center w-full h-full">
                        <Link href="" className="text-gray-800 font-medium hover:text-emerald-500">Shop</Link>
                        <Link href="" className="text-gray-800 font-medium hover:text-emerald-500">About us</Link>
                        <Link href="" className="text-gray-800 font-medium hover:text-emerald-500">Blog</Link>
                    </ul>
                </div>
                {/* MENU ENDS HERE   */}
                <div className="buttons  justify-center items-center hidden sm:flex">
                        <button className="border border-solid border-emerald-500 text-emerald-500 font-medium px-2 py-1 rounded hover:bg-emerald-500 hover:text-white">Sign up</button>
                </div>
                        {/* HAMBURGER_MENU */}
                        <div className="grow flex justify-end items-center px-5 sm:hidden relative z-30">
                              <div className="lines_container  h-8 w-8 flex flex-col justify-center items-center bg-emerald-100 rounded " onClick={()=>openMenu()}>
                                <span className=" w-4 h-0.5 rounded-sm bg-emerald-500 my-0.5 transform transition-all duration-500 inline-block ease-out" ref={line1}></span>
                                <span className=" w-4 h-0.5 rounded-sm bg-emerald-500 my-0.5 inline-block transition-all duration-500 ease-out" ref={line2}></span>
                                <span className=" w-4 h-0.5 rounded-sm bg-emerald-500 my-0.5 transform  transition-all duration-500 inline-block ease-out" ref={line3}></span>
                              </div>

                        </div>
<div className="sm:hidden ">
    <SideMenu isMenu2={isMenu}/>
</div>
            </div>
        </div>
        </>
    )
}