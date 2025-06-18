import React from "react";
import Img1 from "../Images/skin_replinisher.jpg";
import HomeImg from "../Images/Home_img.png";

function Home() {
  return (
    <div className="bg-custom-color1 pb-20 pt-20">
      <div className=" w-full flex justify-around items-center">
        <p className="w-64">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your nautural glow every day.
        </p>
        <p className="w-32 text-6xl text-custom-color2 font-bold">
          GLOW NATUR- ALLY
        </p>
        <img src={Img1} alt="img" className="w-40 h-40 rounded-3xl ml-40" />
      </div>
      <button className="bg-custom-color2 text-white p-3 px-7  rounded-3xl ml-52 mt-40">
        Shop now
      </button>
      <div className="relative ">
        <h1 className="text-[270px] text-custom-color2 font-bold h-80 text-center object-cover ">
          SKINCARE
        </h1>
        <div className="absolute inset-0 rounded-3xl w-full justify-center flex ">
          <img
            src={HomeImg}
            alt="img"
            className="w-[450px] h-[450px] p-5 rounded-3xl -mt-28"
          />
        </div>
        <h1 className="absolute top-52 left-[580px] bg-custom-color1 bg-opacity-95 rounded-full border pr-2 flex">
          <img src={Img1} alt="img" className="w-[80px] p-2 rounded-full  " />
          <span className="text-custom-color2 w-60 ml-2 mt-3">
            While giving you an invigorating cleansing experience.
          </span>
        </h1>
      </div>
      <p className="w-5/6 text-start text-4xl mt-10 ml-40">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with{" "}
        <span className="opacity-40">
          advanced science, our collection ensures every skin type can achieve a
          radiant, healthy glow. Embrace your beauty with confidence every day.
          Experience the ultimate in skincare with our expertly formulated
          products, crafted to nourish, protect, and rejuvenate your skin.
        </span>
      </p>
    </div>
  );
}

export default Home;
