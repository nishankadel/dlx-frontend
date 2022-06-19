import React from "react";

const AuthField = ({ label, type, name, fn, value, placeholder }) => {
  return (
    <>
      <div className="w-full md:w-full px-3 mb-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-2 px-2 leading-tight focus:outline-none"
          type={type}
          name={name}
          value={value}
          onChange={fn}
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default AuthField;
