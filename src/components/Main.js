import axios from "axios";
import React, { useEffect, useState } from "react";
import Requests from "../Requests";
import Play from "../images/Play.svg";
import { BsFillPlayFill } from "react-icons/bs";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(Requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute  w-full top-[20%] p-4 md:p-8  ">
          <h1 className="text-3xl text-left md:text-5xl font-bold ">
            {movie?.title}
          </h1>

          <p className="text-gray-400 text-sm py-4">
            Released:{movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
          {/* buttons and overview */}
          <div className="my-6 ">
            <div className="flex">
              <button className="flex items-center  border bg-white text-black border-gray-300 py-2 px-5 rounded-md">
                <BsFillPlayFill size={20} className="mx-2" />
                <h2 className="text-base font-[600]">Play</h2>
              </button>

              <button className="flex border  text-white border-gray-300 bg-gray-500 py-2 px-5 ml-5">
                + My List
              </button>
            </div>

            {/* <img className="py- px-5" src={Play} alt="play button" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
