// https://askingtips.com/dl/getty/tmp/dl.beatsnoop.com-3000-voLfU83WRj.jpg
// https://askingtips.com/dl/getty/tmp/dl.beatsnoop.com-3000-nmjhKUMxXV.jpg

import CartIcon from "../snippets/CartIcon";
import FullScreenIcon from "../snippets/FullScreenIcon";

// export default function Card({url,description,price}:{url:string,description:string,price:string}){
//     return(
//         <>
//         <div className="main_card">
//             <div className="flex flex-col bg-white overflow-hidden rounded-md shadow">
//                 <img src={url} alt="" />
//                 <div className="py-5 relative">
//                     {/* BUTTONS STARTS HERE  */}
//                     <div className="w-full absolute -top-4 px-6 right-0 flex gap-3">
//                         <span className="flex justify-center items-center px-2 py-2 bg-emerald-100 rounded shadow cursor-pointer"><CartIcon width="16" height="16" bg="text-emerald-500"/></span>
//                         <span className="px-2 py-2 bg-emerald-100 rounded shadow cursor-pointer flex justify-center items-center"><FullScreenIcon width="16" height="16" bg="text-emerald-500"/></span>

//                     </div>
//                     {/* BUTTONS ENDS HERE  */}

//                 <div className="desc py-3 px-5 text-gray-800">
//                     {description}
//                 </div>
//                 <p className="price px-5 font-semibold text-lg text-gray-900">
//                     {price}
//                 </p>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
export default function Card({url,description,price}:{url:string,description:string,price:string}){
    return(
        <>
        <div className="main_card">
            <div className="flex flex-col bg-white overflow-hidden rounded-md shadow h-full">
                <img src={url} alt=""  className=" object-cover aspect-[3/2]"/>
                <div className="py-5 relative h-full">
                    {/* BUTTONS STARTS HERE  */}
                    <div className="w-full absolute -top-4 px-6 right-0 flex gap-3">
                        <span className="flex justify-center items-center px-2 py-2 bg-emerald-100 rounded shadow cursor-pointer"><CartIcon width="16" height="16" bg="text-emerald-500"/></span>
                        <span className="px-2 py-2 bg-emerald-100 rounded shadow cursor-pointer flex justify-center items-center"><FullScreenIcon width="16" height="16" bg="text-emerald-500"/></span>

                    </div>
                    {/* BUTTONS ENDS HERE  */}

                <div className="flex flex-col ">
                <div className="desc py-3 px-5 text-gray-800">
                    {description}
                </div>
                <p className="price px-5 font-semibold text-lg text-gray-900 w-full">
                    {price}
                </p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}