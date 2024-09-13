import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get("http://localhost:3118/book");
      console.log(res.data);
      setBook(res.data);
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl text-blue-900 dark:text-blue-300 font-semibold">
            Explore Our Curated Collection of Books
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            Explore our extensive collection of literature, featuring everything
            from timeless masterpieces to contemporary bestsellers. Whether
            you're an avid reader or just beginning your literary journey, our
            carefully curated selection offers something for every bibliophile.
          </p>

          <Link to="/">
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {book.map((item, index) => (
            <Cards key={item.id || index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
