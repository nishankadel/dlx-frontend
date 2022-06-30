import React from "react";
import { GoogleLogin } from "react-google-login";

const responseSuccessGoogle = (response) => {
  console.log(response);
};
const responseFailureGoogle = (response) => {
  console.log(response);
};

const google_client_id =
  "299982078514-gb9lugr2kr865e974iusmbp142ail3ft.apps.googleusercontent.com";
const google_client_secret = "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";

const ReactGoogleLogin = () => {
  return (
    <>
      <GoogleLogin
        clientId={google_client_id}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            type="submit"
            className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
          >
            <i className=" h-6 text-xl w-6 fill-current text-red-700 fa-brands fa-google"></i>
          </button>
        )}
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default ReactGoogleLogin;
