import React from "react";
import toast from "react-hot-toast";

const Cards = ({ item }) => {
  console.log(item);

  const handleAddToCart = () => {
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-full bg-white shadow-lg hover:shadow-xl duration-200 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 rounded-lg overflow-hidden">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="h-60 w-full object-cover"
          />
        </figure>
        <div className="card-body p-5 flex flex-col justify-between h-44">
          <div>
            <h2 className="card-title text-xl font-bold text-blue-800 dark:text-blue-300 flex items-center">
              <span className="truncate ">{item.name}</span>
              <div className="badge badge-secondary bg-blue-500 text-white ml-2 border border-blue-700">
                {item.category}
              </div>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Author: {item.author}
            </p>
          </div>
          <div className="card-actions flex justify-between items-center ">
            <div className="badge badge-outline text-blue-700 dark:text-blue-300 font-medium">
              ₹{item.price}
            </div>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 rounded-full border-2 border-blue-500 bg-blue-500 text-white hover:bg-blue-600 duration-200 text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
