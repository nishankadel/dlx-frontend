import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  return (
    <>
      <nav class="z-0 relative">
        <div class="relative z-10 bg-green-300 shadow">
          <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div class="relative flex items-center justify-center h-16">
              <div class="flex items-center px-2 lg:px-0">
                <div class="flex">
                  <Link
                    to="/features/lab-test"
                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-green-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Lab Test
                  </Link>
                  <Link
                    to="#"
                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-green-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Article
                  </Link>
                  <Link
                    to="#"
                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-green-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Recipe
                  </Link>
                  <Link
                    to="#"
                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800  hover:bg-green-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
                  >
                    Promo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Tabs;
