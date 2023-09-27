import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen font-euclid-circular-a">
      <div className="text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-12" />
        <div className="mb-6">
          <h3>Welcome to Pharmanager Prescriptions for Doctors</h3>
          <p>Login or sign up to continue</p>
        </div>
        <div className="space-x-1/3">
          <button
            className="mr-4 bg-sky-500 w-36 px-8 py-2 rounded text-white text-center"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className="mr-4 bg-sky-500 w-36 px-4 py-2 rounded text-white text-center"
            onClick={handleSignupClick}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
