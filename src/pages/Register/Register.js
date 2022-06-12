import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthComponent/AuthButton";
import AuthField from "../../components/AuthComponent/AuthField";

const Register = () => {
  return (
    <>
      <div class="text-center mt-5">
        <div class="flex items-center justify-center">
          <Link to="/">
            <img
              class="w-12 h-12"
              src="/logo.png"
              alt="dlx logo"
              draggable="false"
            />
          </Link>
        </div>
        <h2 class="text-2xl tracking-tight">Register Your Account</h2>
        <span class="text-sm">
          or &nbsp;
          <Link to="/auth/login" class="text-blue-500">
            login to your account
          </Link>
        </span>
      </div>
      <div class="flex justify-center my-1 mx-4 md:mx-0">
        <form class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <AuthField
              label="Full Name"
              type="fullname"
              name="text"
              fn={""}
              value="Nishan Kadel"
            />
            <AuthField
              label="Email Address"
              type="email"
              name="email"
              fn={""}
              value="nishankadel39@gmail.com"
            />
            <AuthField
              label="Phone Number"
              type="number"
              name="phonenumber"
              fn={""}
              value="9817029878"
            />
            <AuthField
              label="Email Address"
              type="email"
              name="email"
              fn={""}
              value="sds"
            />
            <AuthField
              label="Province"
              type="text"
              name="province"
              fn={""}
              value="Province 1"
            />{" "}
            <AuthField
              label="District"
              type="text"
              name="district"
              fn={""}
              value="Sunsari"
            />{" "}
            <AuthField
              label="City"
              type="text"
              name="city"
              fn={""}
              value="Itahari"
            />
            <AuthField
              label="Area"
              type="text"
              name="area"
              fn={""}
              value="Buspark"
            />
            <AuthField
              label="Password"
              type="password"
              name="password"
              fn={""}
              value="123456"
            />
            <AuthField
              label="Confirm Password"
              type="password"
              name="confirmpassword"
              fn={""}
              value="123456"
            />
            <div class="w-full md:w-full px-3 mb-6">
              <AuthButton label="Sign Up" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
