import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const PageLayout: React.FC = () => {
  return (
    <main className="font-inter">
      <Navbar />
      <div className="container max-w-2xl mx-auto py-20 px-4">
        <Outlet />
      </div>
      <hr className="container mx-auto max-w-md dark:border-gray-700" />
      <div className="text-center py-6 text-gray-600 dark:text-gray-400">
        <p className="text-xs mb-[2px]">&copy; Copyright 2022</p>
        <p className="text-xs flex items-center justify-center">
          <span className="mr-1">
            <HiOutlineCode />
          </span>
          with
          <span className="text-red-400 mx-1">
            <FaHeart />
          </span>
          by Dodi Aditya.
        </p>
      </div>
    </main>
  );
};

export default PageLayout;
