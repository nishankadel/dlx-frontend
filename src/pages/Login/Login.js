import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthComponent/AuthButton";
import AuthField from "../../components/AuthComponent/AuthField";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, selectUser } from "../../redux/features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    email,
    password,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formData, navigate, toast }));
    }
  };

  return (
    <>
      {user.isLoading && <Spinner />}
      <div className="text-center mt-14">
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
        <h2 className="text-2xl tracking-tight">Sign In To Your Account</h2>
        <span className="text-sm">
          or &nbsp;
          <Link to="/auth/register" className="text-blue-500">
            register a new account
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
              label="Email Address"
              type="email"
              name="email"
              placeholder="E.g. nishankadel39@gail.com"
              fn={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <AuthField
              label="Password"
              type="password"
              name="password"
              placeholder="E.g. ********"
              fn={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />

            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <div className="flex items-center w-1/2"></div>
              <div className="w-1/2 text-right">
                <Link to="/" className="text-blue-500 text-sm tracking-tight">
                  Forget your password?
                </Link>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <AuthButton label="Sign In" />
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400"></div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
                <button
                  type="submit"
                  className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <i className=" h-6 text-xl w-6 fill-current text-red-700 fa-brands fa-google"></i>
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
