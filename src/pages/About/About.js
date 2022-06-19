import React from "react";

const About = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                About Us
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
                    <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Online Doctor Consultation
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Get remotely accessible health consultation with doctor and
                    health professionals.
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
                    <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Online Pharmacy
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
                    <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Wholesale Shop
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
                     <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Online Laboratory Book
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
                      <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Health Library
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
                     <i className="fa-solid fa-user-doctor w-5 text-2xl h-5"></i>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Quality & In-time Serve
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Offering wide range of quality medical products.
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

export default About;
