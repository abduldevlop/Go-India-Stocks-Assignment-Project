import React from "react";
import { marketStories } from "../data";
import Image from "next/image";

const RightSection = () => {
  return (
    <div className="py-4 px-5 flex flex-col w-full ">
      <div className="flex flex-col ">
        <h1
          className=" hidden xl:block text-xl
          text-[#D47D86] uppercase font-bold p-3 bg-[#F0F0F0] w-fit rounded-md  "
        >
          Merket Storires
        </h1>
        <div className="mt-10 flex flex-col gap-5 w-full items-center  ">
          {marketStories.map((story) => (
            <div key={story.id}>
              <Image
                src={story.img}
                alt={story.title}
                width={300}
                height={210}
              />
              <div className="w-[280px] flex gap-2 flex-col p-2">
                <h2 className="text-[18px] font-medium "> {story.title} </h2>
                <p className="text-[13px] text-[#535456] "> {story.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSection;
