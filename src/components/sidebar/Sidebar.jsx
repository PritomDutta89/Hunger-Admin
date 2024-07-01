/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [focus, setFocus] = useState("Add");
  const navigate = useNavigate();

  return (
    <>
      <div className="border-r border-[#a9a9a9] h-[100vh] fixed top-20">
        <div className="flex flex-col gap-8 pt-[3rem] pl-[1rem] md:pl-[3rem]">
          <div
            title="Add Items"
            className={`flex items-center gap-4 p-2 cursor-pointer border border-[#a9a9a9] border-r-0 ${
              focus === "Add" ? "bg-[#fff0ed] border-red-500 " : ""
            } rounded-md rounded-r-none`}
            onClick={() => {
              navigate("/");
              setFocus("Add");
            }}
          >
            <img src={assets.add_icon} alt="" className="" />
            <p className="hidden lg:block">Add Items</p>
          </div>
          <div
            title="List Items"
            className={`flex items-center gap-4 p-2 cursor-pointer border border-[#a9a9a9] border-r-0 ${
              focus === "List" ? "bg-[#fff0ed] border-red-500 " : ""
            } rounded-md rounded-r-none`}
            onClick={() => {
              navigate("/list");
              setFocus("List");
            }}
          >
            <img src={assets.order_icon} alt="" className="" />
            <p className="hidden lg:block">List Items</p>
          </div>
          <div
            title="Orders items"
            className={`flex items-center gap-4 p-2 cursor-pointer border border-[#a9a9a9] border-r-0 ${
              focus === "Orders" ? "bg-[#fff0ed] border-red-500 " : ""
            } rounded-md rounded-r-none`}
            onClick={() => {
              navigate("/orders");
              setFocus("Orders");
            }}
          >
            <img src={assets.order_icon} alt="" className="" />
            <p className="hidden lg:block">Orders items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
