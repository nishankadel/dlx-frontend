import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthComponent/AuthButton";
import AuthField from "../../components/AuthComponent/AuthField";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import baseUrl from "../../baseUrl";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [fulladdress, setFullAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fullname &&
      email &&
      phonenumber &&
      fulladdress &&
      password &&
      confirmpassword &&
      dob &&
      gender
    ) {
      axios
        .post(`${baseUrl}/auth/register`, {
          fullname,
          email,
          phonenumber,
          fulladdress,
          password,
          confirmpassword,
          dob,
          gender,
        })
        .then((res) => {
          setLoading(true);
          if (res.data.success === true) {
            localStorage.setItem("user-token", JSON.stringify(res.data.token));
            localStorage.setItem("user-profile", JSON.stringify(res.data.user));
            navigate("/auth/login");
            toast.success(res.data.message);
          }
          if (res.data.success === false) {
            navigate("/auth/register");
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
      <div className="text-center mt-5">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img
              className="w-12 h-12"
              src="/logo.png"
              alt="dlx logo"
              draggable="false"
            />
          </Link>
        </div>
        <h2 className="text-2xl tracking-tight">Register Your Account</h2>
        <span className="text-sm">
          or &nbsp;
          <Link to="/auth/login" className="text-blue-500">
            login to your account
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-1 mx-4 md:mx-0">
        <form
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <AuthField
              label="Full Name"
              type="fullname"
              name="text"
              placeholder="E.g. Nishan Kadel"
              fn={(e) => setFullname(e.target.value)}
              value={fullname}
            />
            <AuthField
              label="Email Address"
              type="email"
              name="email"
              placeholder="E.g. nishankadel39@gmail.com"
              fn={(e) => setEmail(e.target.value)}
              value={email}
            />
            <AuthField
              label="Phone Number"
              type="number"
              name="phonenumber"
              placeholder="E.g. 98*******"
              fn={(e) => setPhonenumber(e.target.value)}
              value={phonenumber}
            />
            <AuthField
              label="Date of Birth"
              type="date"
              name="dob"
              fn={(e) => setDob(e.target.value)}
              value={dob}
            />
            <div
              className="grid w-[40rem] grid-cols-4 space-x-2 rounded-xl mb-1 bg-gray-200 p-2"
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

            <AuthField
              label="Full Address"
              type="text"
              name="fulladdress"
              placeholder="E.g. Buspark, Itahari-9, Sunsari, Nepal"
              fn={(e) => setFullAddress(e.target.value)}
              value={fulladdress}
            />
            <AuthField
              label="Password"
              type="password"
              name="password"
              placeholder="E.g. *********"
              fn={(e) => setPassword(e.target.value)}
              value={password}
            />
            <AuthField
              label="Confirm Password"
              type="password"
              name="confirmpassword"
              placeholder="E.g. *********"
              fn={(e) => setConfirmpassword(e.target.value)}
              value={confirmpassword}
            />
            <div className="w-full md:w-full px-3 mb-6">
              <AuthButton label="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
