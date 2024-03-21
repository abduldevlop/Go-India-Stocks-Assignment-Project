import React from "react";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";
import RightSection from "../components/RightSection";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-[#1E375F] h-screen py-5 text-white">
        <SideBar />
      </div>
      <div className=" w-3/4">
        <MainSection />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
};

export default HomePage;
