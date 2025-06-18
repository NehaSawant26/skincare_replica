import React, { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Img1 from "../Images/Cleanser.jpg";
import Img2 from "../Images/Body_cream.jpg";
import Img3 from "../Images/Body_lotion.jpg";
import Img4 from "../Images/facewash.jpg";
import Img5 from "../Images/skin_replinisher.jpg";
import Img6 from "../Images/fome_cleanser.jpg";
import Img7 from "../Images/Moisturizer.png";

function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Images = [Img1, Img2, Img3, Img4, Img5, Img6];
  const Search = ["NEW ARRIVALS", "CLEANSERS", "ACNE FIGHTER", "ANTI-AGING"];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < Images.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-custom-color1 w-full pb-40">
      <div className=" flex justify-evenly ">
        <div className="flex border border-custom-color2 p-3 rounded-3xl mt-5 h-12">
          <p className="bg-custom-color2 w-3 h-3 mt-2 rounded-xl mr-3"></p>
          <p>Best Selling Products</p>
        </div>
        <p className="text-4xl text-custom-color2 w-1/3">
          Skincare That Brings Out Your Natural Radiance
        </p>
        <div className="flex gap-7 h-16">
          <button
            onClick={handlePrev}
            className="border rounded-full  border-custom-color2 bg-custom-color1 hover:bg-custom-color2 hover:text-custom-color1"
          >
            <GoArrowLeft className="w-16 size-12" />
          </button>

          <button
            onClick={handleNext}
            className=" border rounded-full  border-custom-color2 bg-custom-color1 hover:bg-custom-color2 hover:text-custom-color1"
          >
            <GoArrowRight className="size-12 w-16" />
          </button>
        </div>
      </div>

      <div className=" w-full overflow-hidden mt-10 mr-10">
        <div
          className=" flex transition-transform duration-500 ease-in-out gap-10 mt-20 pl-5 pr-5 ml-14"
          style={{ transform: `translateX(-${currentIndex * 460}px)` }}
        >
          {Images.map((images, index) => (
            <img
              key={index}
              src={images}
              alt={`Product ${index + 1}`}
              className="w-[440px] h-[550px] rounded-3xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="pt-52 justify-center flex relative">
        <img src={Img7} alt="Img5" className="w-5/6 rounded-3xl" />
        <div className="absolute top-3/4 left-[300px]">
          <p className="text-6xl w-5/6 text-white text-center">
            Feel Beautifull Inside and Out with Every Product
          </p>
          <button className="bg-white text-custom-color2 mt-16 p-3 rounded-full px-7 ml-[450px]">
            Shop now
          </button>
        </div>
      </div>

      <div className="left-1/2">
        <p className="text-center text-5xl mt-44 text-custom-color2 w-3/6 ml-96">
          Feel Beautifull Inside and Out with Every Product
        </p>

        <div className="flex justify-center mt-10 gap-5">
          {Search.map((search, index) => (
            <div
              key={index}
              className="flex border border-custom-color2 hover:bg-custom-color2 hover:text-custom-color1 cursor-pointer p-3 rounded-3xl mt-5 h-12 w-40 justify-center mb-10"
            >
              <p>{search}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-11/12 flex gap-10 mt-20 pl-5 pr-5 ml-16">
        {Images.slice(0, 3).map((images, index) => (
          <img
            key={index}
            src={images}
            alt={`Product ${index + 1}`}
            className="w-[450px] h-[550px] rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
