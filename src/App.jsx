/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import Order from "./pages/orders/Order";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      
      <div className="flex w-full">
        <div className="w-[5rem] md:w-[8rem] lg:w-[15rem]">
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<Add />} />
        <Route path="list" element={<List />} />
        <Route path="orders" element={<Order />} />
      </Route>
    </Routes>
  );
};

export default App;
