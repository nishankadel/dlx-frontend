import React from "react";

const EPrescription = () => {
  return (
    <>
      <section class="text-gray-600">
        <div class="container px-3 py-3 mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="w-full mb-2 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl  font-medium title-font mb-2 text-gray-900">
                Upload Prescriptions
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <div class="flex flex-col w-full items-center justify-center">
            <p class="mt-2 bg-white p-6 rounded-md text-gray-500 shadow-lg">
              In order to use this feature, upload the prescription given by
              doctors.
            </p>
            <p class="mt-2 bg-white p-6 rounded-md text-gray-500 shadow-lg">
              After upolad, notification mail is sent to you and if the uploaded
              prescription is valid, confirmation mail is sent.
            </p>
            <p class="mt-2 bg-white p-6 rounded-md text-gray-500 shadow-lg">
              After confirmation, medicines in prescription will be added to the
              cart.
            </p>
          </div>

          <div class="flex items-center justify-center mt-4">
            <div class="w-full max-w-md">
              <form
                class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
                action="/medicine/upload-prescription"
                method="post"
                enctype="multipart/form-data"
              >
                <div class="text-gray-800 text-3xl flex justify-center border-b-2 py-2 mb-4">
                  Upload Your Prescription
                </div>

                <div class="flex justify-center">
                  <div class="mb-3 w-96">
                    <label
                      for="image"
                      class="form-label inline-block mb-2 text-gray-700"
                    >
                      Prescription Image
                    </label>
                    <input
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      name="prescriptionimage"
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
                    Upload Prescription
                  </button>
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                Please upload valid prescription given by doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600">
        <div class="container px-3 py-3 mx-auto">
          <div class="flex flex-wrap w-full mb-8">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-bold  title-font mb-2 text-gray-900">
                Your Prescription Lists
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
                          Prescription Id
                        </th>
                        <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Prescription Image
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
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody class="bg-white">
                      {/* loop  */}

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
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div class="text-sm leading-5 text-gray-900">
                            fullname
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <span class="px-2 inline-flex text-xs leading-5 font-semibold text-gray-500">
                            {" "}
                            email
                          </span>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          phone and address
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          status
                        </td>
                      </tr>

                      {/* loop  */}
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

export default EPrescription;
