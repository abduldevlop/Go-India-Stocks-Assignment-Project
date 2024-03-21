import React from "react";
import { AiFillDollarCircle, AiOutlineUser } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

const SideBar = () => {
  const marketStores = [
    { id: 1, title: "Sentiment" },
    { id: 2, title: "Market" },
    { id: 3, title: "Sector" },
    { id: 4, title: "Watchlist" },
    { id: 5, title: "Events" },
    { id: 5, title: "News/Interview" },
  ];
  return (
    <aside>
      <div className="flex justify-between border-b px-4 pb-4">
        <div className="flex gap-2 items-center">
          <AiOutlineUser size={25} />
          <h4>
            Hello, <span>User</span>
          </h4>
        </div>
        <div className="relative flex items-center">
          <IoNotificationsOutline size={25} />
          <div className="w-2 h-2 bg-red-500 absolute top-0 right-0 rounded-full" />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between bg-[#142341] px-4 py-2">
          <div className="flex items-center gap-2">
            <BiMessageAltDetail size={25} />
            <h3>Disscussion Fourm</h3>
          </div>
          <IoMdArrowDropdown />
        </div>
        <div className="flex   px-4 py-2 mt-2 flex-col">
          <div className="flex items-center gap-2">
            <AiFillDollarCircle size={25} />
            <h3>Market Stories</h3>
          </div>
          <ul className="mt-4 ml-4 flex flex-col gap-4">
            {marketStores.map((story) => (
              <li key={story.id}>{story.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
