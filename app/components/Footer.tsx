export default function Footer(){
    return(
        <>
        <div className="footer_main my-10 relative h-auto sm:h-96 ">  
        
            <div className="content px-10 w-full relative z-10 ">
                <div className="flex bg-emerald-200 rounded relative h-full"  > 
<div className="overlay bg-gradient-to-b from-white to-transparent opacity-60 z-20 absolute top-0 bottom-0 left-0 w-full h-4/6"></div>

                    <div className=" sm:w-2/3 md:w-2/3 md2:w-2/3 lg:w-2/3 flex flex-col py-6 sm:px-4 md:px-3 lg:px-4 sm:h-96 justify-center relative z-10" > 
                    <div className="logo px-8 sm:px-10">
                        <img src="./logo.svg" alt="" />
                    </div>
                    <div className="headings px-8 pt-6 sm:px-4 md:px-5 md2:px-7 lg:px-10 sm:pt-5 md:pt-5 lg:pt-5 flex flex-col relative z-10">
                        <h2 className="text-gray-900 font-bold text-3xl sm:text-3xl  md:text-4xl lg:text-4xl">Bring Natural Charm To Your Life</h2>
                        <p className="py-4 text-gray-800 relative z-10 sm:text-sm md:text-base"> 
                            Explore our huge catalogue of plant products, you&apos;ll be impressed by the variety we offer! Want to place a custom order? Leave us a message, we&apos;ll reply ASAP.
                        </p>
                        <button className="my-4 w-fit px-4 py-2 rounded inline-block bg-emerald-500 text-white font-medium border border-solid border-emerald-500 hover:bg-emerald-600">
                            View Products
                        </button>
                    </div>

                    </div>
                    <div className="footer_image sm:w-1/3 md:w-1/3 md2:w-1/3 lg:w-1/3 h-96 hidden  relative sm:grid grid-cols-1 grid-rows-1  z-30 "> 
                     <div className="col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden relative">
                        <div className="bg-emerald-100  sm:w-72 sm:h-72 sm:top-10  md:w-80 md:h-80 w-96 h-96 rotate-45 md:top-7 sm:-right-40 md:-right-40 md2:-right-36 lg:top-16 lg:-right-28 z-0 absolute"></div> 
                        </div>
                     <div className="image col-start-1 col-end-2 row-start-1 w-full h-full row-end-2 z-30 transform sm:scale-90 md:scale-100 md2:scale-100 lg:scale-110 ">
                     <img src="./footer.png" alt="flower-pot" className="md:h-full w-full h-full lg:h-full transform object-cover sm:translate-x-4 md2:translate-x-7 lg:translate-x-12  overflow-visible" />
                     </div>
                           
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}