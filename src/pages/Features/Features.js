import React from "react";
import { Link } from "react-router-dom";
import LabTest from "./LabTest";

const Features = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Our Features
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 w-1/2">
              <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="
                w-8
                h-8
                mr-3
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-500
                text-white
                flex-shrink-0
              "
                  >
                    <i className=" w-2 text-2xl h-9 fa-solid fa-1"></i>
                  </div>
                  <h2 className="text-white hover:text-gray-300 text-lg title-font font-medium">
                    <Link to="/features/lab-test">Book Your Lab Test</Link>
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Get cost and time effective medical standard lab solutions
                    at your doorstep.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-1/2">
              <div className="flex rounded-lg h-full bg-indigo-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="
                w-8
                h-8
                mr-3
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
                flex-shrink-0
              "
                  >
                    <i className="fa-solid fa-2 w-2  text-2xl h-9"></i>
                  </div>
                  <h2 className="text-white hover:text-gray-300 text-lg title-font font-medium">
                    <Link to="/features/medicine-request">
                      Medicine Request
                    </Link>
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Order medicines online and get it delivered to your
                    doorstep.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-1/2">
              <div className="flex rounded-lg h-full bg-green-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="
                w-8
                h-8
                mr-3
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-500
                text-white
                flex-shrink-0
              "
                  >
                    <i className="fa-solid fa-3 w-2  text-2xl h-9"></i>
                  </div>
                  <h2 className="text-white hover:text-gray-300 text-lg title-font font-medium">
                    <Link to="/features/e-prescription">E-Prescription</Link>
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Offering wide range of medical supplies including Medicines,
                    Surgical etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-1/2">
              <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="
                w-8
                h-8
                mr-3
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-500
                text-white
                flex-shrink-0
              "
                  >
                    <i className="fa-solid fa-4 w-2  text-2xl h-9"></i>
                  </div>
                  <h2 className="text-white hover:text-gray-300 text-lg title-font font-medium">
                    <Link to="">Book Appointment</Link>
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Get cost and time effective medical standard lab solutions
                    at your doorstep.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-1/2">
              <div className="flex rounded-lg h-full bg-indigo-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="
                w-8
                h-8
                mr-3
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
                flex-shrink-0
              "
                  >
                    <i className="fa-solid fa-5 w-2  text-2xl h-9"></i>
                  </div>
                  <h2 className="text-white hover:text-gray-300 text-lg title-font font-medium">
                    <Link to="">Chat</Link>
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Get health related articles, making one aware of healthy
                    habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
