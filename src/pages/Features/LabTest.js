import React, { useState } from "react";
import BreadCrumb from "../../components/Features/BreadCrumb";
import moment from "moment";
import ViewLabTest from "../../components/Features/ViewLabTest";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LabTest = () => {
  const userProfile = JSON.parse(localStorage.getItem("user-profile"));
  const userToken = JSON.parse(localStorage.getItem("user-token"));
  const [labtestType, setLabtestType] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const options = [
    { id: 1, label: "Select Test Type", value: 0, name: "Blood" },
    { id: 2, label: "Blood", value: "Blood", name: "Blood" },
    { id: 3, label: "Urine", value: "Urine", name: "Urine" },
    { id: 4, label: "Stool", value: "Stool", name: "Stool" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${baseUrl}/labtest/book-labtest`,
        {
          userId: userProfile._id,
          labtestType: labtestType,
          duration: duration,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          navigate("/features/lab-test");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading && <Spinner />}
      <BreadCrumb LinkTest="Lab Test" />
      <section className="text-gray-600">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
                Book Lab Test
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flatpickr container mx-auto col-span-6 sm:col-span-6 mt-5">
              <label
                htmlFor="datetime"
                className="flex-grow block font-medium text-sm text-gray-700 mb-1"
              >
                Select Lab Test Type:
              </label>

              <div className="relative inline-flex mb-5">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                  />
                </svg>
                <select
                  className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  name="labtest_type"
                  onChange={(e) => setLabtestType(e.target.value)}
                >
                  {options.map((option) => (
                    <option
                      key={option.id}
                      name={option.name}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <label
                htmlFor="datetime"
                className="flex-grow block font-medium text-sm text-gray-700 mb-1"
              >
                Date and Time
              </label>

              <div className="flex align-middle align-content-center">
                <input
                  type="date"
                  name="labtestDate"
                  id="labtestDate"
                  placeholder="Select.."
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  min={moment().format("YYYY-MM-DD")}
                  className="block w-full px-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-l-md shadow-sm"
                />

                <button
                  type="submit"
                  className="ml-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <ViewLabTest />
        </div>
      </section>
    </>
  );
};

export default LabTest;
