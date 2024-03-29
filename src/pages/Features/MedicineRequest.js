import React from "react";
import BreadCrumb from "../../components/Features/BreadCrumb";

const MedicineRequest = () => {
  return (
    <>
      <BreadCrumb LinkTest="Request Medicine" />
      <section class="text-gray-600">
        <div class="container px-3 py-3 mx-auto">
          <div class="flex flex-wrap w-full mb-8">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Request Medicines
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="w-full max-w-md">
              <form
                class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
                action="/medicine/request-medicine"
                method="post"
                enctype="multipart/form-data"
              >
                <div class="text-gray-800 text-3xl flex justify-center border-b-2 py-2 mb-4">
                  Upload The Medicine Info
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-1xl font-normal mb-2"
                    for="medicinename"
                  >
                    Medicine Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="medicinename"
                    type="medicinename"
                    required
                    autofocus
                    placeholder="E.g: Metfor 850"
                  />
                </div>
                <div class="mb-2">
                  <label
                    class="block text-gray-700 text-1xl font-normal mb-1"
                    for="medicinemg"
                  >
                    Medicine Milligram (mg)
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="E.g: 100, 200, 1000"
                    name="medicinemg"
                    autofocus
                    required
                  />
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 w-96">
                    <label
                      for="image"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      Medicine Image
                    </label>
                    <input
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      name="medicineimage"
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between mt-2">
                  <button
                    class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                    type="submit"
                  >
                    Upload Information
                  </button>
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                Please enter valid information in above field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600">
        <div class="container px-3 py-3 mx-auto">
          <div class="flex flex-wrap w-full mb-8">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl  font-medium title-font mb-2 text-gray-900">
                Your Requested Medicines
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div class="container mx-auto px-6 py-3">
            <div class="flex flex-col">
              <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table class="min-w-full">
                    <thead>
                      <tr>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Req Id
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Medicine Name
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          MG
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          User Name
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Credentials
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Req Date
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody class="bg-white">
                      {/* loop ends  */}

                      <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          id
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src=""
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">
                                medicine name
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div class="text-sm leading-5 text-gray-900">
                            medicine mg
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold text-gray-500">
                            full name
                          </span>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          email
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          phone and address
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          req date
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          statuys
                        </td>
                      </tr>

                      {/* loop ends  */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicineRequest;
