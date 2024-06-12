import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const TestNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b-2 border-base-300 mb-5">
      <div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <a href="#" className="hover:text-red-100 hover:font-bold">
          About
        </a>
        <a href="#" className="hover:text-red-100 hover:font-bold">
          Contact
        </a>
        <a href="#" className="hover:text-red-100 hover:font-bold">
          Resume
        </a>
        <a href="#" className="hover:text-red-100">
          <FaGithub size={25} />
        </a>
        <a href="#" className="hover:text-red-100">
          <SiGmail size={25} />
        </a>
        <a href="#" className="hover:text-red-100">
          <RiInstagramFill size={25} />
        </a>
      </div>
    </div>
  );
};

export default TestNavbar;
