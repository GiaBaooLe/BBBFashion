import { Header } from "../../components/layouts/Header";

import BannerAuto from "../../components/layouts/BannerAuto";
// import ImageZoom from "react-image-magnifier-zoom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductList from "../../components/layouts/ProductList";
import { Link } from "react-router";
import { useEffect } from "react";
import { Footer } from "../../components/layouts/Footer";


export const Home = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    // once: true,    
  });
}, []);
  return (
<div className="flex flex-col min-h-screen">
      <div className="w-full    ">
          <div className="w-full max-w-screen overflow-x-hidden mx-auto">
      <div className="relative w-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/2.mp4" type="video/mp4" className="w-full" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 ">
              <Header />
            </div>
            <div className="absolute inset-0 flex flex-col mt-130 text-white  text-center space-y-3 ">
              <p className="text-5xl font-mono "  data-aos="fade-up">The collection</p>
              <p className="font-mono text-3xl" data-aos="fade-up">Of Clothes in 2025</p>
              <div className="text-md">
                <Link to="/product">
                  <button  data-aos="fade-up" data-aos-delay="300" className="border-none w-30 text-xl hover:bg-white hover:text-black hover:font-semibold p-2 bg-black opacity-80 "> 
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-20 ">
        <div  className="w-1/2 ">
          <p data-aos="fade-right" className="text-4xl text-center font-semibold ">
            Explore the Spring collection
          </p>
        </div>
        <div className="w-1/2 space-y-15" data-aos="fade-right">
          <p   className="text-lg pl-5 "  >
            {" "}
            The Rolex collection offers a wide range of prestigious,
            high-precision timepieces, from Professional to Classic models to
            suit any wrist
          </p>
          <div    className="flex items-center  space-x-2 pl-5 text-black font-semibold cursor-pointer hover:text-blue-500">
            <p >Find your outlet</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4 font-semibold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <BannerAuto />
      </div>
      <p className="text-4xl font-mono text-center px-10 pt-20" data-aos="fade-down">
        Outstanding products
      </p>
      <div  data-aos="zoom-out"   className="flex justify-around items-center p-10 px-60 text-black font-semibold ">
        <p className="cursor-pointer hover:underline hover:font-bold">All</p>
        <p className="cursor-pointer hover:underline hover:font-bold">Runway</p>
        <p className="cursor-pointer hover:underline hover:font-bold">New In</p>
        <p className="cursor-pointer hover:underline hover:font-bold">Women</p>
        <p className="cursor-pointer hover:underline hover:font-bold">Men</p>
        <p className="cursor-pointer hover:underline hover:font-bold">Bags</p>
        <p className="cursor-pointer hover:underline hover:font-bold">
          Accessories
        </p>
        <p className="cursor-pointer hover:underline hover:font-bold">
          Jewellery
        </p>
      </div>
      <ProductList  />
      <div className="text-4xl p-10 font-mono text-center px-10 pt-20" data-aos="fade-down">
        Our Services
      </div>
      <div className="flex mb-10 justify-around items-center p-10 space-x-10 px-60 text-black font-semibold " >

          <div className="w-[300px] h-[400px] space-y-5">
        <video src="/3.mp4" autoPlay loop muted className=" w-[300px] h-[400px] object-cover"></video>
      <div className="space-y-3">
          <p className="text-center font-semibold text-lg">Personalization</p>
          <p className="text-md font-light text-center ">Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.</p>
        </div>
      <div>

      </div>
      </div> 
      <div className="w-[300px] h-[400px] space-y-5">
        <video src="/4.mp4" autoPlay loop muted className=" w-[300px] h-[400px] object-cover  "></video>
       <div className="space-y-3">
          <p className="text-center font-semibold text-lg">Collect In Store</p>
         <p className="text-md font-light text-center ">Order online and collect your order from your preferred Gucci boutique.</p>
        </div>
      </div> 
          <div className="w-[300px] h-[400px] space-y-5">
        <video src="/5.mp4" autoPlay loop muted className=" w-[300px] h-[400px] object-cover"></video>
       <div className="space-y-3">
          <p className="text-center font-semibold text-lg">Personalization</p>
          <p className="text-md font-light text-center ">Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection with initials to create a truly unique piece.</p>
            </div>
          </div> 
        
      
        </div>
        <div className="flex justify-around items-center p-10 space-x-10 px-60 text-black font-semibold ">


       
        
        
      </div>
      <Footer/>
    </div>
  );
};
//  <div className="w-50 h-50">
//        <Image src={FC} width="auto"/>
//       {/* <ImageZoom
//         src={FC}
//         width={300}
//         height={300}
//         magnifierSize={100}
//         zoomLevel={2.5}
//         enabled={true}
//       /> */}
//       </div>
