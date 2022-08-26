import React, { useState, useEffect } from "react";
import moment from "moment";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Tooltip } from "@material-tailwind/react";

const ViewLabTest = () => {
  const userProfile = JSON.parse(localStorage.getItem("user-profile"));
  const userToken = JSON.parse(localStorage.getItem("user-token"));

  const [labtests, setLabtests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/labtest/all-labtest/${userProfile._id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        setLabtests(res.data.labtests);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userProfile._id, userToken]);
  console.log(labtests);
  return (
    <>
      {loading && <Spinner />}
      <div className="overflow-x-auto">
        <div className="bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-center">Test Id</th>
                    <th className="py-3 px-6 text-center">Test Type</th>
                    <th className="py-3 px-6 text-center">Test Date</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Result</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {/* loop starts here  */}
                  {labtests.map((labtest) => (
                    <tr
                      key={labtest._id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-center">
                        <Tooltip
                          className="bg-indigo-900 p-4 text-white"
                          content={labtest.feedback}
                        >
                          <div className="flex items-center justify-center">
                            {labtest._id}
                          </div>
                        </Tooltip>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {labtest.labtestType}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          {moment(labtest.createdAt).format("MMM Do YYYY")}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          {labtest.status}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          {labtest.result}
                        </div>
                      </td>
                    </tr>
                  ))}

                  {/* loop ends here  */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewLabTest;
