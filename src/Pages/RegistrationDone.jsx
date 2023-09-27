import React from "react";
import account from "../images/account-image.png";
import { useNavigate } from "react-router-dom";

export default function RegistrationDone() {
const navigate = useNavigate()
  const handleLogin = ()=>{
navigate('/login')
  }
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden font-euclid-circular-a">
      <div className="flex flex-col md:flex-row items-center h-screen">
        <div className="w-full mr-56">
          <img src={account} alt="account" className="h-full w-full" />
        </div>

        <div className="mr-96 text-center w-56 mb-44 whitespace-nowrap">
          <h2 className="mb-12 font-bold ml-20 text-xl">Create an account</h2>
          <p>
            <span className="ml-24">Thanks for registering.</span> <br />
            Kindly check your email for a verification status.
          </p>
          <button className="bg-sky-600 text-white ml-24 mt-5 w-36 p-2" onClick={handleLogin}>Back to login</button>
        </div>

      
      </div>
      
  
    </div>
  );
}

 
