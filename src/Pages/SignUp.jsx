import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import account from "../images/account-image.png";
import logo from "../images/logo.png";

export default function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post(
        "https://prescriptions-pharmanager.onrender.com/api/v1/auth/users",
        {
          firstname: firstName,
          lastname: lastName,
          licenseId: licenseId,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFirstName("");
      setLastName("");
      setLicenseId("");
      setEmail("");
      setPassword("");
      navigate("/registered");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a">
      <div className="flex flex-col md:flex-row items-center h-screen">
        <div className="w-full">
          <img src={account} alt="account" className="h-full w-full" />
        </div>

        <div className="flex flex-col justify-center items-center mt-12">
          <img src={logo} alt="" className="mb-12 mt-4 mr-56 max-w-full" />
          <div className="ml-auto mb-44">
            <h2 className="mb-12 text-center font-bold mr-56 text-xl">
              Create an account
            </h2>

            <form className="mr-7" onSubmit={handleSubmit}>
              <div className="flex mb-4 ml-44">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-36 mr-2 border border-gray-200 p-2"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-36 border border-gray-200 p-2"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <input
                type="text"
                placeholder="Medical license ID"
                className="mb-4 w-72 text-black border border-gray-200 p-2 ml-44"
                onChange={(e) => setLicenseId(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email address"
                className="mb-4 w-72 text-black border border-gray-200 p-2 ml-44"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-4 w-72 border text-black border-gray-200 p-2 ml-44"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-sky-500 text-white px-4 py-2 rounded w-72 ml-44">
                Sign up
              </button>
              <p className="mb-6 ml-56 text-xs mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
