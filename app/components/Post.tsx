import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { PostProps } from "../types";

const Post: React.FC<PostProps> = ({
  id,
  profile,
  name,
  sector,
  date,
  postDesc,
  likes,
  views,
  comments,
}) => {
  return (
    <div className="w-full shadow-md p-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={profile}
            alt={name}
            className="rounded-full object-cover"
            height={40}
            width={40}
          />
          <span className="text-[12px]"> {name} </span>
          <p className="bg-[#2355A0] px-1 text-[10px] xl:px-3 xl:py-1 text-white xl:text-[12px] rounded-full">
            {sector}
          </p>
        </div>

        <p className="text-[12px] text-blue-500 font-bold"> {date} </p>
      </div>
      <div className="px-4 xl:px-12 pt-2">
        <h3 className="text-[12px]">{postDesc}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <AiOutlineLike size={20} />
            <span> {likes} </span>
          </div>
          <div className="flex gap-2">
            <FaRegEye size={20} />
            <span> {views} </span>
          </div>
          <div className="flex gap-2">
            <BiComment size={20} />
            <span> {comments} </span>
          </div>
          <div className="flex gap-2">
            <FiShare2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
