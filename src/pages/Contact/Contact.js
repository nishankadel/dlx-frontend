import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const profile = JSON.parse(localStorage.getItem("user-profile"));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (profile) {
      e.preventDefault();
      console.log(feedback);
    } else {
      toast.error("Please login to submit feedback");
      navigate("/auth/login");
    }
  };

  return (
    <>
      <div className="relative flex items-top justify-center mt-10 bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-2">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100  sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600  mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  <i className="fa-solid fa-location-crosshairs w-8 h-8 text-gray-500 text-3xl"></i>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Buspark Area, Itahari-9, Sunsari-Nepal
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <i className="fa-solid fa-phone w-8 h-8 text-gray-500 text-3xl"></i>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +977 9817029767
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <i className="fa-solid fa-envelope  w-8 h-8 text-gray-500 text-3xl"></i>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    nishankadel39@gmail.com
                  </div>
                </div>
              </div>

              <form
                className="flex flex-col justify-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="feedback" className="hidden">
                    Write your feedback
                  </label>
                  <textarea
                    type="text"
                    name="feedback"
                    rows="10"
                    id="name"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write Your Feedback"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
