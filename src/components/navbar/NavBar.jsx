/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[3rem] md:px-[4rem] py-2 sticky top-0 z-50 shadow-md bg-white">
        <div className="">
          <h1 className="font-extrabold text-[1.9rem] text-red-500">Hunger.</h1>
          <p className="text-[0.8rem] md:text-[0.9rem] text-gray-600">Admin Panel</p>
        </div>
        <div>
          <img src={assets.profile_image} alt="icon" className="rounded-full w-[2.8rem]"/>
        </div>
      </div>
      {/* <hr className="fixed top-0"/> */}
    </>
  );
};

export default NavBar;
