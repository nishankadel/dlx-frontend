import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthComponent/AuthButton";
import AuthField from "../../components/AuthComponent/AuthField";

const Login = () => {
  return (
    <>
      <div class="text-center mt-14">
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
        <h2 class="text-2xl tracking-tight">Sign In To Your Account</h2>
        <span class="text-sm">
          or &nbsp;
          <Link to="/auth/register" class="text-blue-500">
            register a new account
          </Link>
        </span>
      </div>
      <div class="flex justify-center my-1 mx-4 md:mx-0">
        <form class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div class="flex flex-wrap -mx-3 mb-6">
            <AuthField
              label="Email Address"
              type="email"
              name="email"
              fn={""}
              value="nishankadel39@gmail.com"
            />
            <AuthField
              label="Password"
              type="password"
              name="password"
              fn={""}
              value="123456"
            />

            <div class="w-full flex items-center justify-between px-3 mb-3 ">
              <div class="flex items-center w-1/2"></div>
              <div class="w-1/2 text-right">
                <Link to="/" class="text-blue-500 text-sm tracking-tight">
                  Forget your password?
                </Link>
              </div>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <AuthButton label="Sign In" />
            </div>
            <div class="mx-auto -mb-6 pb-1">
              <span class="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div class="flex items-center w-full mt-2">
              <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400"></div>
              <div class="w-full md:w-1/3 px-3 pt-4 mx-2">
                <button
                  type="submit"
                  class="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <i className=" h-6 text-xl w-6 fill-current text-red-700 fa-brands fa-google"></i>
                </button>
              </div>
              <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
