import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthComponent/AuthButton";
import AuthField from "../../components/AuthComponent/AuthField";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import ReactGoogleLogin from "../../components/ReactGoogleLogin/ReactGoogleLogin";
import baseUrl from "../../baseUrl";

const Login = () => {
  const [email, setEmail] = useState("nishankadel39@gmail.com");
  const [password, setPassword] = useState("User@9817");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      axios
        .post(`${baseUrl}/auth/login`, {
          email,
          password,
        })
        .then((res) => {
          if (res.data.success === true) {
            localStorage.setItem("user-token", JSON.stringify(res.data.token));
            localStorage.setItem("user-profile", JSON.stringify(res.data.user));
            navigate("/");
            toast.success(res.data.message);
          }
          if (res.data.success === false) {
            navigate("/auth/login");
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
                <ReactGoogleLogin />
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
