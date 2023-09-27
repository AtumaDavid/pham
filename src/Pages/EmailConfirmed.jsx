import React from "react";
import account from "../images/account-image.png";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const EmailConfirmed = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a">
      <div className="flex flex-col md:flex-row items-center h-screen">
        <div className="w-full mr-56">
          <img src={account} alt="account" className="h-full w-full" />
        </div>

        <div className="mr-96 text-center w-56 mb-44 whitespace-nowrap">
          <img src={logo} alt="" className="fixed top-[10%] right-[29%]"/>
          <p className="leading-10">
            <span className="ml-24 text-center text-black text-base font-semibold font-['Euclid Circular A']">
              Your email has been verified.
            </span>{" "}
            <br />
            <span className="text-center text-black text-base font-semibold font-['Euclid Circular A']">
              Begin to manage your hospital operations with us.
            </span>
          </p>
          <button
            className="bg-sky-600 text-white ml-24 mt-5 w-36 p-2"
            onClick={handleLogin}
          >
            Return to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmed;
