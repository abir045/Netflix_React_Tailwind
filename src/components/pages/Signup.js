import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/3da08d3b-8797-4590-b402-8ab52179e592/BD-en-20220509-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      {/* overlay */}
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      {/* sign Up box */}
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="font-bold text-3xl">Sign Up</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-base p-3 my-2  rounded items-center"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 text-base p-3 my-2  rounded items-center"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 mx-6 font-bold rounded text-base mt-6 mb-3">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input type="checkbox" /> Remember me
                </p>
                <p> Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600 text-base ">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
