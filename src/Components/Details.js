import React from "react";
import Img2 from "../Images/Eye_mask.png";
import Award from "../Images/award.png";

function Details() {
  return (
    <div className="bg-custom-color1 w-full flex justify-center pb-40">
      <div className="w-1/3 mr-20">
        <div className="flex border border-custom-color2 p-3 w-52 rounded-3xl mt-5">
          <p className="bg-custom-color2 w-3 h-3 mt-2 rounded-xl mr-3"></p>
          <p>Why Our Products</p>
        </div>
        <p className="text-4xl text-custom-color2 mt-12">
          YOUR SKIN DESERVES THE BEST CARE.
        </p>
        <p className="mt-7 text-sm w-5/6">
          Discover a curated collection of skincare products designed to
          rejuvenate, protect, and pamper your skin. Explore our rage crafted
          with love backed by science, and inspired by nature.
        </p>

        <div className="mt-10">
          <h1 className="text-4xl text-custom-color2">01 Bio Ingredients</h1>
          <p className="mt-4 text-sm ml-14 w-80">
            Get naturally beautiful and transform with our bio ingredients
            creams for healthy, radiant skin.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl text-custom-color2">02 Everything Natural</h1>
          <p className="mt-4 text-sm ml-14 w-80">
            Pure ingredients for pure skin. The Perfect solution for your skin
            care needs.
          </p>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl text-custom-color2">03 All Handmade</h1>
          <p className="mt-4 text-sm ml-14 w-80">
            Made with love and care. Just for you. Give your skin the tender
            loving care it deserves.
          </p>
        </div>
      </div>
      <div className="mt-7 relative">
        <img src={Img2} alt="img" className="w-[520px] h-[660px] rounded-3xl" />
        <div className="absolute border flex p-2 rounded-full top-[550px] left-[120px] w-80 bg-custom-color1 bg-opacity-70">
          <img
            src={Award}
            alt="award"
            className="w-14 h-14 border bg-custom-color2 p-3 rounded-full"
          />
          <p className="text-custom-color2 text-xl ml-5">
            Best Skin Care Product Award Wining
          </p>
        </div>
        <div className="mt-5 justify-between flex ml-5 mr-3">
          <span> SINCE 2001 </span>
          <span> LEARN MORE </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
