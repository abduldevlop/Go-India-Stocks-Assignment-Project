import React from "react";
import { posts } from "../data";
import Post from "./Post";

const MainSection = () => {
  return (
    <main className="px-5 p-4 overflow-x-scroll ">
      <h1 className="hidden xl:block text-3xl text-[#D47D86] uppercase font-bold bg-[#F0F0F0] w-fit p-3 rounded-md ">
        Disscussion Fourm
      </h1>
      <div className="mt-5 flex flex-col gap-10">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

export default MainSection;
