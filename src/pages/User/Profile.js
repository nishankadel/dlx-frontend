import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Login from "../../pages/Login/Login";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("user-token"));
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.success === true) {
          setUserInfo(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Spinner />}
      {token && userInfo ? (
        <div className="h-full mt-5">
          <div className="border-b-2 block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
              <div className="flex justify-between">
                <span className="text-xl font-semibold block">
                  {userInfo.userType} Profile
                </span>
                <a
                  href="/user/edit-profile"
                  className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                >
                  Edit
                </a>
              </div>
              <div className="w-full p-8 mx-2 flex justify-center">
                <img
                  id="showImage"
                  className="items-center border"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                  }}
                  src={userInfo.avatar}
                  alt="user_pic"
                />
              </div>
              <Link
                to="/"
                className="-mt-2 text-md font-bold text-white bg-green-700 rounded-full px-5 py-2 hover:bg-green-800"
              >
                Order History
              </Link>
              <Link
                to="/"
                className="-mt-2 text-md font-bold text-white bg-indigo-700 rounded-full px-5 py-2 hover:bg-indigo-800"
              >
                Appointment List
              </Link>
            </div>
            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
              <div className="rounded shadow p-6">
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Full Name
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={userInfo.fullname}
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <input
                    disabled
                    id="email"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="email"
                    value={userInfo.email}
                  />
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={userInfo.phonenumber}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Address
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={userInfo.fulladdress}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Date of Birth
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={userInfo.dob}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Gender
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={userInfo.gender}
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Profile Created At
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1 rounded-r px-4 py-2 w-full"
                      type="text"
                      value={moment(userInfo.createdAt).fromNow()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;
