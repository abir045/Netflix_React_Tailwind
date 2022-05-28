import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Logo from "../images/Logo.svg";
import LogoMobile from "../images/LogoMobile.svg";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <img className="hidden md:block" src={Logo} alt="logo" />
        <img className="md:hidden" src={LogoMobile} alt="logo" />
      </Link>
      <div className="hidden md:flex items-center absolute mx-32">
        <Link to="/">
          <button className="text-white ml-0  px-2">Home</button>
        </Link>
        <Link to="/">
          <button className="text-white px-2 ">TV Shows</button>
        </Link>
        <Link to="/">
          <button className="text-white px-2 ">Movies</button>
        </Link>
        <Link to="/">
          <button className="text-white px-2 ">Recently Added</button>
        </Link>
      </div>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-4">My List</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className=" text-white pr-4 ">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
