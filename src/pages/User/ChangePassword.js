import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";
import Spinner from "../../components/Spinner/Spinner";
import Login from "../../pages/Login/Login";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (currentPassword && newPassword && confirmNewPassword) {
      axios
        .post(
          `${baseUrl}/user/change-password`,
          {
            id: profile._id,
            currentPassword,
            newPassword,
            confirmNewPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.success == true) {
            localStorage.removeItem("user-token");
            localStorage.removeItem("user-profile");
            toast.success(res.data.message);
            navigate("/auth/login");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      {loading && <Spinner />}

      {token ? (
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="
          w-full
          lg:w-7/12
          bg-white
          p-5
          mx-auto
          rounded-lg
          lg:rounded-l-none
        "
              >
                <h3 className="pt-4 text-2xl text-center">
                  Change Your Password
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handlePasswordChange}
                >
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Current Password
                    </label>
                    <input
                      className="
                w-full
                px-3
                py-2
                mb-3
                text-sm
                leading-tight
                text-gray-700
                border
                rounded
                shadow
                appearance-none
                focus:outline-none focus:shadow-outline
              "
                      type="password"
                      value={currentPassword}
                      required
                      name="currentPassword"
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      New Password
                    </label>
                    <input
                      className="
                w-full
                px-3
                py-2
                mb-3
                text-sm
                leading-tight
                text-gray-700
                border
                rounded
                shadow
                appearance-none
                focus:outline-none focus:shadow-outline
              "
                      type="password"
                      value={newPassword}
                      required
                      name="currentPassword"
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      COnfirm New Password
                    </label>
                    <input
                      className="
                w-full
                px-3
                py-2
                mb-3
                text-sm
                leading-tight
                text-gray-700
                border
                rounded
                shadow
                appearance-none
                focus:outline-none focus:shadow-outline
              "
                      type="password"
                      value={confirmNewPassword}
                      required
                      name="currentPassword"
                      onChange={(e) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="
                w-full
                px-4
                py-2
                font-bold
                text-white
                bg-blue-500
                rounded-full
                hover:bg-blue-700
                focus:outline-none focus:shadow-outline
              "
                      type="submit"
                    >
                      Change Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
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

export default ChangePassword;
