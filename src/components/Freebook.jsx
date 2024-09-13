import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookstore-backend-q9sc.onrender.com/book"
        );

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
          Discover Our Premium Collection of Free Books
        </h1>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Explore our curated selection of high-quality books available for
          free. Whether you're interested in classic literature or contemporary
          works, our collection offers something for everyone. Dive into
          expertly selected titles and enrich your reading experience without
          any cost.
        </p>
      </div>

      <div className="relative">
        <Slider {...settings} className="rounded-lg overflow-hidden ">
          {book.map((item, index) => (
            <div
              key={item.id || index}
              className="p-4 bg-white rounded-lg transition-shadow duration-300 ease-in-out"
            >
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
