import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "https://bookstore-backend-q9sc.onrender.com/user/login",
        userInfo
      );

      if (res.data) {
        toast.success("Login Successful. Welcome back!");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      toast.error("Login Failed: " + err.response.data.message);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gradient-to-b from-white to-gray-100 dark:bg-slate-900 dark:text-white text-black rounded-lg shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-600 dark:text-gray-300"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-semibold text-2xl text-blue-800 dark:text-blue-300 mb-4">
              Welcome Back to Book Haven
            </h3>

            <div className="mt-4 space-y-3">
              <label htmlFor="email" className="font-medium text-base">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none dark:bg-slate-700 transition duration-300"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">Email is required</span>
              )}
            </div>

            <div className="mt-4 space-y-3">
              <label htmlFor="password" className="font-medium text-base">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none dark:bg-slate-700 transition duration-300"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  Password is required
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300">
                Sign In
              </button>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                New to Book Haven?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-600 hover:text-blue-700 transition"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
