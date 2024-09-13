import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div className="flex justify-center my-1">
      <button
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
