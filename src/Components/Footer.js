import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-custom-color2 text-white p-10">
        <div className="flex justify-around">
          <div className="w-72">
            <h1 className="text-3xl">Join The Skincare Community Now.</h1>
            <ul className="flex justify-between mt-20 text-xs">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="w-96">
            <h1>Get in touch</h1>
            <p className="text-3xl">contact.skincare.com</p>
            <ul className="flex justify-between mt-20 text-xs">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
            </ul>
          </div>
        </div>
        <h1 className="text-[250px] opacity-10 font-bold mt-32 h-72 text-center">
          SKINCARE
        </h1>
      </div>
    </>
  );
}

export default Footer;
