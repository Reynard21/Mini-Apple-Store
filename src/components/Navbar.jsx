import React from "react";
import { navItems } from "../data";

const Navbar = ({ activePage, handleNavClick }) => {
  return (
    <>
      <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
        <a
          href="#"
          className="2xl:text-2xl xl:text-xl font-light  text-shadow-black mb-14 tracking-wider"
        >
          <button
            className="bx bxl-apple text-2xl"
            href="https://www.apple.com/"
          ></button>
        </a>
        <div className="flex flex-col flex-grow ">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3 5 text-left cursor-pointer"
              onClick={() => handleNavClick(index)}
            >
              <i className={`${item.icon} text-xl text-shadow-black`}></i>
              <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">
                {item.label}
              </span>
              <i
                className={` text-lg text-yellow-400 ${
                  activePage === index ? item.activeIcon : item.inactiveIcon
                }`}
              ></i>
            </a>
          ))}
        </div>
        <div className="flex justify-between pr-6 pb-2">
          <a href="https://www.linkedin.com/in/reynardrenato">
            <i className="bx bxl-linkedin text-2xl text-blue-500"></i>
          </a>
          <a href="https://github.com/Reynard21">
            <i className="bx bxl-github text-2xl text-shadow-black"></i>
          </a>
          <a href="https://wa.me/628112018486">
            <i className="bx bxl-whatsapp text-2xl text-green-500"></i>
          </a>
          <a href="mailto:reynardrenato@gmail.com?subject=Professional%20Inquiry%20Regarding%20Your%20Portfolio&body=Dear%20Reynard%2C%0D%0A%0D%0AI%20recently%20reviewed%20your%20portfolio%20and%20was%20impressed%20with%20your%20projects%20and%20experience.%20I%20would%20like%20to%20discuss%20a%20potential%20opportunity%20or%20collaboration%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D">
            <i className="bx bxl-gmail text-2xl text-red-500"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
