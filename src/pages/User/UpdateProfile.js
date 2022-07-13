import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../../baseUrl";
import Spinner from "../../components/Spinner/Spinner";

const UpdateProfile = () => {
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [fulladdress, setFulladdress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const profile = JSON.parse(localStorage.getItem("user-profile"));
  const token = JSON.parse(localStorage.getItem("user-token"));

  const userData = {
    _id: profile._id,
    fullname: fullname,
    email: profile.email,
    phonenumber: phonenumber,
    dob: dob,
    gender: gender,
    fulladdress: fulladdress,
    avatar: profile.avatar,
    userType: profile.userType,
    emailVerified: profile.emailVerified,
    password: profile.password,
    createdAt: profile.createdAt,
    __v: 0,
  };

  console.log(profile);
  useEffect(() => {
    setFullname(profile.fullname);
    setPhonenumber(profile.phonenumber);
    setDob(profile.dob);
    setGender(profile.gender);
    setFulladdress(profile.fulladdress);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (fulladdress && fullname && dob && gender && phonenumber) {
      axios
        .post(
          `${baseUrl}/user/update-profile`,
          {
            id: profile._id,
            fullname,
            fulladdress,
            gender,
            dob,
            phonenumber,
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
            localStorage.setItem("user-profile", JSON.stringify(userData));
            toast.success(res.data.message);
            navigate("/user/profile");
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
              <h3 className="pt-4 text-2xl text-center">Edit Your Profile</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleUpdate}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Full Name
                    </label>
                    <input
                      className="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                      type="text"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      name="fullname"
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      className="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                      type="number"
                      value={phonenumber}
                      onChange={(e) => {
                        setPhonenumber(e.target.value);
                      }}
                      name="phonenumber"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      className="
                  w-full
                  px-3
                  py-2
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                
                "
                      type="date"
                      value={dob}
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      name="phonenumber"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div
                    className="grid w-[30rem] grid-cols-4 space-x-2 rounded-xl mb-1 bg-gray-200 p-1"
                    x-data="app"
                  >
                    <div>
                      <label
                        htmlFor="gender"
                        className="block cursor-pointer select-none rounded-xl p-2 text-center bg-gray-500 text-white "
                      >
                        Gender
                      </label>
                    </div>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <div className="title px-2">Male</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <div className="title px-2">Female</div>
                    </label>
                    <label className="flex radio p-2 cursor-pointer">
                      <input
                        className="my-auto transform scale-125"
                        type="radio"
                        id="other"
                        name="gender"
                        value="Other"
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <div className="title px-2">Other</div>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Address
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
                    type="text"
                    value={fulladdress}
                    required
                    name="address"
                    onChange={(e) => {
                      setFulladdress(e.target.value);
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
                    Submit
                  </button>
                </div>
                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
