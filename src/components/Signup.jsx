import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    const res = await axios.post("http://localhost:3118/user/signup", userInfo);

    if (res.data) {
      toast.success("Sign-up Successful!");
      navigate(from, { replace: true });
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } else {
      toast.error("Sign-up failed. Please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="w-[600px] bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white">
        <div className="relative">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-600 dark:text-gray-300"
          >
            ✕
          </Link>
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6">
            Create Your Account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    Full name is required.
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email is required.
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Password is required.
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition duration-300">
                Sign Up
              </button>
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <button
                  className="underline text-blue-600 hover:text-blue-700 transition"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Log In
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
