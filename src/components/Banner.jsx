import React from "react";
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white text-black dark:bg-black dark:text-white">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Discover Your Next Favorite Book{" "}
              <span className="text-blue-600">at Our Bookstore!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to our bookstore, where you'll find a curated selection of
              books across all genres. From the latest bestsellers to timeless
              classics, we have something for every reader. Dive into our
              collection and find your next great read today!
            </p>
            <label className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow bg-transparent border-none outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter your email for updates"
              />
            </label>
          </div>
          <button className="btn mt-6 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 rounded-full px-6 py-3 font-semibold shadow-lg transition duration-300 ease-in-out dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700">
            Explore Now
          </button>
        </div>
        <div className="bg-transparent order-1 w-full mt-20 md:w-1/2 ">
          <img
            src={banner}
            className="w-full md:w-[550px] md:h-[460px] md:ml-12 object-cover rounded-lg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
