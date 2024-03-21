"use client";
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import MainSection from "../components/MainSection";
import RightSection from "../components/RightSection";
import { IoMdArrowDropright } from "react-icons/io";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [activePageTitle, setActivePageTitle] = useState("Discussion Forum");

  const pageTitles = [
    { id: 1, title: "Discussion Forum" },
    { id: 2, title: "Market Stories" },
  ];

  const handlePageTitleClick = (title: string) => {
    setActivePageTitle(title);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-[15px] h-[100px] bg-[#1E375F] text-white fixed top-[50%] ${
          open ? "left-[250px]" : "left-[20px]"
        } flex items-center justify-center cursor-pointer transition-all duration-300 rounded-md`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <IoMdArrowDropright size={25} />
      </div>

      {/* Sidebar Content */}
      <div
        className={`${
          open ? "w-[250px]" : "w-0"
        } bg-[#1E375F] h-screen py-5 text-white fixed overflow-y-auto transition-all duration-300`}
      >
        {open && <SideBar />}
      </div>

      {/* Main Section */}
      <div
        className={`${
          !open ? "ml-[100px]" : "ml-[250px]"
        } w-[60%] overflow-y-auto transition-all duration-300 hidden xl:block`}
      >
        <MainSection />
      </div>

      {/* Right Section */}
      <div
        className={`xl:w-[300px] fixed right-0 h-screen overflow-y-auto transition-all duration-300 hidden xl:block`}
      >
        <RightSection />
      </div>

      {/* Mobile view */}
      <div className="xl:hidden w-full">
        {/* Page Titles */}
        <div className="flex items-center bg-[#1E375F] text-white gap-5 h-[50px]">
          {pageTitles.map((pageTitle) => (
            <h1
              key={pageTitle.id}
              className={`flex-1 py-[13px] text-center cursor-pointer ${
                activePageTitle === pageTitle.title
                  ? "bg-[#142341]"
                  : "bg-[#1E375F]"
              }`}
              onClick={() => handlePageTitleClick(pageTitle.title)}
            >
              {pageTitle.title}
            </h1>
          ))}
        </div>
        {/* Conditional Rendering based on activePageTitle */}
        {activePageTitle === "Discussion Forum" ? (
          <MainSection />
        ) : (
          <RightSection />
        )}
      </div>
    </div>
  );
};

export default HomePage;
