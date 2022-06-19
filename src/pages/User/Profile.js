import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { getUser, profile } from "../../redux/features/profile/profileSlice";
import Login from "../../pages/Login/Login";
import Spinner from "../../components/Spinner/Spinner";
import { selectUser } from "../../redux/features/auth/authSlice";

const Profile = () => {
  const userProfile = useSelector(getUser);
  const userData = useSelector(selectUser);

  const dispatch = useDispatch();

  const userInfo = userProfile.profile;

  const token = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(profile(token));
  }, []);
  return (
    <>
      {userProfile.isLoading && <Spinner />}
      {userData.isLoggedIn && userInfo ? (
        <div className="h-full mt-5">
          <div className="border-b-2 block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
              <div className="flex justify-between">
                <span className="text-xl font-semibold block">
                  {userInfo.user.userType} Profile
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
                  src={userInfo.user.avatar}
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
                      value={userInfo.user.fullname}
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
                    value={userInfo.user.email}
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
                      value={userInfo.user.phonenumber}
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
                      value={userInfo.user.fulladdress}
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
                      value={userInfo.user.dob}
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
                      value={userInfo.user.gender}
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
                      value={moment(userInfo.user.createdAt).fromNow()}
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
