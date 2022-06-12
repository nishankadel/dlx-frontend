import React from "react";

const UpperHead = () => {
  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center"></div>
          <div className="flex md:order-2"></div>
          <div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-wrap justify-between items-center md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <label className="block py-2 pr-4 pl-3 text-white roundedmd:p-0">
                  Drug Loft Xpress
                </label>
              </li>
              <li>
                <label className="block py-2 pr-4 pl-3 text-white roundedmd:p-0">
                  +977-9817029767
                </label>
              </li>
              <li>
                <label className="block py-2 pr-4 pl-3 text-white roundedmd:p-0">
                  nishankadel39@gmail.com
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UpperHead;
