import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import Bodylotion from "../Images/Body_lotion.jpg";

function FAQ() {
  const [OpenId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const data = [
    {
      id: 1,
      que: "Are your products safe for sensitive skin?",
      ans: "Absolutely! All our products are specially formulated for sensitive skin. However, it is recommended to do a patch test before use to check potential sensitivity.",
    },
    {
      id: 2,
      que: "Are your products cruelty-free?",
      ans: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics",
    },
    {
      id: 3,
      que: "What's your return policy?",
      ans: "Items can be returned within 30 days of purchase if they are in their original, unworn condition with all tags attached.",
    },
    {
      id: 4,
      que: "Do you ship internationally?",
      ans: "No, International shipping is not available at the moment. We currently ship only within the country.",
    },
    {
      id: 5,
      que: "How do I check the right product?",
      ans: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics",
    },
  ];
  return (
    <div className="bg-custom-color1 w-full flex justify-center pb-20">
      <div className="relative">
        <img
          src={Bodylotion}
          alt="FAQ"
          className="w-[550px] h-[660px] p-5 rounded-3xl object-cover"
        />
        <div className="absolute inset-y-[530px] inset-x-40  w-48  rounded-3xl justify-center items-center">
          <p className="flex bg-custom-color1 p-3 rounded-3xl bg-opacity-60 text-sm">
            <FaHeadphones className="size-10 mr-5" /> 24/7 We're here to help
            you
          </p>
        </div>
      </div>
      <div className="w-2/5 justify-items-center">
        <div className="flex border border-custom-color2 p-3 w-3/6 rounded-3xl mt-5">
          <p className="bg-custom-color2 w-3 h-3 mt-2 rounded-xl mr-3"></p>
          <p>Frequently asked question</p>
        </div>
        <p className="text-[40px] mt-14 w-4/6 mb-16">
          Answers to Your Skincare Questions, All in One Place
        </p>
        {data.map(({ id, que, ans }) => (
          <div
            key={id}
            className="border border-custom-color2 p-2 rounded-lg w-4/6 mt-3 "
          >
            <div className="flex">
              <p>{que}</p>
              <button className="ml-auto" onClick={() => handleClick(id)}>
                {OpenId === id ? (
                  <FaMinus className="size-5" />
                ) : (
                  <IoIosAdd className="size-7" />
                )}
              </button>
            </div>
            {OpenId === id && <p className="p-3 text-sm">{ans}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
