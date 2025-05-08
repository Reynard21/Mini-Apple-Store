import React from "react";
import { items } from "../data/index";
const Home = ({ onNavigate }) => {
  return (
    <>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-grow items-center justify-center bg-white"
            onClick={() => onNavigate(item.pageIndex)}
          >
            <span className="text-xl font-bold bg-gradient-to-b from-fuchsia-700 via-violet-600 to-sky-400 bg-clip-text text-transparent tracking-wide mb-12">
              {item.label}
            </span>
            <img
              src={item.img}
              alt={item.label}
              className="max-w-[65%] max-h-[65%] object-contain"
              draggable="false"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
