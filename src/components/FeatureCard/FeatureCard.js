import React from "react";

const FeatureCard = () => {
  return (
    <>
      <div className="pb-1">
        <dh-component>
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-4"
              >
                <h1
                  tabIndex="0"
                  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
                >
                  Our Services
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>

              <div
                tabIndex="0"
                aria-label="group of cards"
                className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
              >
                <div
                  tabIndex="0"
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <i className="fa-solid fa-basket-shopping"></i>
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      Buy Medical Products Online
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Order medicines online and get it delivered to your
                      doorstep.
                    </p>
                  </div>
                </div>

                <div
                  tabIndex="0"
                  aria-label="card 2"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <i className="fa-solid fa-flask"></i>
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Lab Tests with result
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Get cost and time effective medical standard lab solutions
                      at your doorstep.
                    </p>
                  </div>
                </div>

                <div
                  tabIndex="0"
                  aria-label="card 3"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <i className="fa-solid fa-tablets"></i>
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Request Products
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Request medical products online and get wide range of
                      medical supplies.
                    </p>
                  </div>
                </div>

                <div
                  tabIndex="0"
                  aria-label="card 4"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1"></div>
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <i className="fa-solid fa-file-waveform"></i>
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex="0"
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      E-Prescription
                    </h2>
                    <p
                      tabIndex="0"
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Upload your doctor recommended prescription and get the
                      requestede medicines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </dh-component>
      </div>

      <section className="text-gray-600">
        <div className="container px-3 py-10 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl  font-medium title-font mb-2 text-gray-900">
                Feature Brands
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 p-4 w-1/2">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://www.beiersdorf.com/~/media/Beiersdorf/brands/brands/nivea/nivea-product-teaser.jpg?mh=1200&mw=1200"
                />
              </a>
            </div>
            <div className="lg:w-1/4 p-4 w-1/2">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://imageio.forbes.com/i-forbesimg/media/lists/companies/medtronic_416x416.jpg?format=jpg&height=416&width=416&fit=bounds"
                />
              </a>
            </div>
            <div className="lg:w-1/4 p-4 w-1/2">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://jnj-content-lab.brightspotcdn.com/dims4/default/06ca57e/2147483647/strip/true/crop/1200x630+0+285/resize/1200x630!/quality/90/?url=http%3A%2F%2Fjnj-brightspot.s3.amazonaws.com%2Fdd%2F18%2Feab18fbe4487b47b33a9dbf7a65a%2Ffb-logo-1200x1200.jpg"
                />
              </a>
            </div>
            <div className="lg:w-1/4 p-4 w-1/2">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://miro.medium.com/max/700/1*QPNTLjb_ZKr6a6nwv9gJQA.jpeg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureCard;
