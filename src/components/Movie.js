import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title || item.name,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[300px] lg:w-[280px] inline-block cursor-pointer rounded-lg relative  my-4 transition duration-150 hover:ease-in-out hover:scale-[1.3] hover:origin-bottom-right hover:overflow-hidden">
        <img
          className="w-[119px] h-[180px] sm:w-full sm:h-full block "
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title}
        />

        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="flex items-center justify-center text-center whitespace-normal text-xs md:text-sm font-bold h-full ">
            {item?.title || item?.name}
          </p>
          <p onClick={saveShow}>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
