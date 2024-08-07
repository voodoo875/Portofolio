import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

const TestNavbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b-2 border-base-300 mb-5 text-white  bg-[#116466]">
      <div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:4072834928. */}
      <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
        <a href="/" ><img
              alt="Tailwind CSS Navbar component"
              src="/1.jpg"
            /></a>
          </div>
        </div>
      </div>
      <div className="flex gap-2 font-bold">
        <a href="/Me" className="hover:text-blue-800 hover:font-bold">
          About
        </a>
        <a href="#" className="hover:text-blue-800 hover:font-bold">
          Contact
        </a>
        <a href="Resume" className="hover:text-blue-800 hover:font-bold">
          Resume
        </a>
        <a href="https://github.com/" className="hover:text-blue-800">
          <FaGithub size={25} />
        </a>
        <a href="" className="hover:text-blue-800">
          <SiGmail size={25} />
        </a>
        <a href="#" className="hover:text-blue-800">
          <RiInstagramFill size={25} />
        </a>
      </div>
    </div>
  );
};

export default TestNavbar;
