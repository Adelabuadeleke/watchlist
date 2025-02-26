"use client";
import { useState, useEffect } from "react";
import Nav from "./nav";

import useAction from "@/hooks/useAction";

import { Movie } from "@/types/movie";

export default function RandomBanner() {
  const {action} = useAction()
  const [movie, setMovie] = useState<Movie | null>(null);

  function getRandomMovie(): Movie | null  {
   if (action.length === 0) return null; 
   const randomMovie = action[Math.floor(Math.random() * action.length)];
   return randomMovie ?? null;
  }

   useEffect(() => {
    if (action.length === 0) return;

    setMovie(getRandomMovie());

    const interval = setInterval(() => {
      setMovie(getRandomMovie());
    }, 5000);

    return () => clearInterval(interval);
  }, [action]);
  // const movie = getRandomMovie()
  // console.log(movie)

 function truncate(str: string, n: number) {
   return str?.length > n ? str.substr(0, n - 1) + "...": str;
 }
 return (
   <header style={{
    backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
   }} className="h-dvh flex flex-col" >
    <Nav />
     <article className="flex items-center flex-1 px-20 ">
      <article className="max-w-96">
        <h1 className="font-extrabold text-[40px] text-white">{movie?.title}</h1>
        <p className="text-white">
           {truncate(movie?.overview ?? "", 200)}
        </p>
      </article>
    </article>
  </header>

 )
 
}