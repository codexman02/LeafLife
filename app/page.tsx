
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductsList from "./components/products";
import HomePageBanner from "./home/page";
export default function Home() {
  return (
   <div className="bg-white ">
   <div className="banner relative">
   <div className="w-full absolute top-0 left-0 z-30 hidden sm:block">
    <Navbar/>
   </div>
   <HomePageBanner/>
   </div>
   <div className="mt-8">
    <ProductsList/>
   </div>
   <div className="w-full overflow-hidden">
    <Footer/>
   </div>
   </div>
  );
}
