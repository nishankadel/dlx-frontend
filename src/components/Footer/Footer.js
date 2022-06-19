import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" mt-10 flex justify-center px-4 text-gray-100 bg-gray-800 ">
        <div className="container py-6 text-center">
          Made with 🔥 by Nishan Kadel
          <hr className="h-px mt-6 bg-gray-700 border-none" />
          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <Link to="/" className="text-xl font-bold">
                DLX
              </Link>
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <Link to="" className="px-4 text-sm">
                  About
                </Link>
                <Link to="" className="px-4 text-sm">
                  Blog
                </Link>
                <Link to="" className="px-4 text-sm">
                  News
                </Link>
                <Link to="" className="px-4 text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
