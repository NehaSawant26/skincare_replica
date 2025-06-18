import React from "react";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div className="bg-custom-color1">
      <nav className="w-full flex p-5">
        <h1 className="text-3xl w-1/5">SKINCARE</h1>
        <div className="w-4/5 ">
          <ul className="flex justify-center gap-7 text-lg">
            <li>All Products</li>
            <li>Serum</li>
            <li>Suncreen</li>
            <li>Bundle</li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-end gap-7 pr-16 text-xl">
          <h1 className="flex gap-2">
            <FaBagShopping /> {"Cart(1)"}
          </h1>
          <FaRegHeart />
          <VscAccount />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
