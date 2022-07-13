import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Login from "../../pages/Login/Login";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("user-token"));
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/user/profile`, {
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
  }, [token]);
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
                <Link
                  to="/update-profile"
                  className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                >
                  Edit
                </Link>
                <Link
                  to="/change-password"
                  className="-mt-2 text-md font-bold text-white bg-red-700 rounded-full px-5 py-2 hover:bg-red-800"
                >
                  Change Password
                </Link>
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
                to="/order-history"
                className="-mt-2 text-md font-bold text-white bg-green-700 rounded-full px-5 mr-3 py-2 hover:bg-green-800"
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
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      {userInfo.fullname}
                    </p>
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email
                  </label>
                  <p className="border-1 rounded-r px-4 py-2 w-full">
                    {userInfo.email}
                  </p>
                </div>
                <div className="pb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      +977-{userInfo.phonenumber}
                    </p>
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
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      {userInfo.fulladdress}
                    </p>
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
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      {userInfo.dob}
                    </p>
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
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      {userInfo.gender}
                    </p>
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
                    <p className="border-1 rounded-r px-4 py-2 w-full">
                      {moment(userInfo.createdAt).fromNow()}
                    </p>
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
