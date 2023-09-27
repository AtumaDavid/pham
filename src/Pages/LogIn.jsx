import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import account from "../images/account-image.png";
import logo from "../images/logo.png";
import AuthContext from "../context/authProvider";
import axios from "axios";

export default function LogIn() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://prescriptions-pharmanager.onrender.com/api/v1/auth/login",
        {  email: email,  password: password }
      );
      const token = response?.data?.token;
      setAuth({ email, password, token });
      setEmail("");
      setPassword("");
      navigate("/prescription");
    } catch (error) {
      console.log(error);
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
              Welcome Back
            </h2>

            <form className="mr-96" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
                className="mb-4 w-72 text-black border border-gray-200 p-2 ml-44"
                required
              />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                className="mb-4 w-72 border text-black border-gray-200 p-2 ml-44"
                required
              />
              <button className="bg-sky-500 text-white px-4 py-2 rounded w-72 ml-44">
                Login
              </button>

              <p className="mb-6 ml-56 text-xs mt-4">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-gray-400 transition duration-200 ease-in-out ml-1"
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
