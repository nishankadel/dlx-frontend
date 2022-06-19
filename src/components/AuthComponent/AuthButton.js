import React from "react";

const AuthButton = ({ label }) => {
  return (
    <>
      <button
        type="submit"
        className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {label}
      </button>
    </>
  );
};

export default AuthButton;
