import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a
          href="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/course"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Course
        </a>
      </li>
      <li>
        <a className="hover:text-blue-500 transition-colors duration-300">
          Contact
        </a>
      </li>
      <li>
        <a className="hover:text-blue-500 transition-colors duration-300">
          About
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-lg bg-base-200 dark:bg-slate-800 dark:text-white rounded-b-lg duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar flex items-center justify-between py-4 rounded-b-lg">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:text-blue-500 transition-colors duration-300 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500" // Change to your preferred color class
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white dark:bg-gray-900 rounded-xl w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-3xl font-bold cursor-pointer text-blue-600 dark:text-blue-400">
            bookStore
          </a>
        </div>
        <div className="navbar-end flex items-center space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-semibold">
              {navItems}
            </ul>
          </div>
          <div className="hidden md:block">
            <label className="px-3 py-1 border rounded-full flex items-center gap-2 border-blue-500 bg-white dark:bg-gray-800 dark:text-white">
              <input
                type="text"
                className="grow outline-none rounded-full px-3 py-2 dark:bg-gray-800 dark:text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {authUser ? (
            <Logout />
          ) : (
            <div className="flex items-center space-x-3">
              <a
                className="bg-blue-600 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition-colors duration-300 cursor-pointer shadow-xl transform hover:scale-105"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
