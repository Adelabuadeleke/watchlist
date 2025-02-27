"use client"

import Image from "next/image"
// import { Rating } from "@material-ui/lab"
import { Rating } from "@mui/material"

import useAction from "@/hooks/useAction"

import { MovieListProps } from "@/types/movieListProp"

export default function Row({data}: MovieListProps) {
 console.log('data: from row-->', data)
 console.log('title', data[0]?.title)
 const baseUrl = "https://image.tmdb.org/t/p/original";

 function truncate(str: string, n: number) {
   return str?.length > n ? str.substr(0, n - 1) + "...": str;
 }

 function getYear(date: string) {
   return date.split("-")[0];
 }

 return (
  <section className="flex overflow-auto scrollbar-hide">
   {data.map(movie=> (
     <article key={movie.id} className="min-w-[250px] p-4 text-white">
     <Image src={`${baseUrl + movie.poster_path}`} width={250} height={300} className="w-[100%] bg-cover object-cover h-[300px]"  alt={movie.title}/>
     {/* <img className="w-[100%] bg-cover object-cover h-[300px] mb-2" src={`${baseUrl + movie.poster_path}`}  alt={movie.title} /> */}
     <h4 className="font-extrabold">{truncate(movie.title, 25)}</h4>
     {movie.release_date?(
      <small>Released: {getYear(movie.release_date)}</small>
     ):(
      <></>
     )}
     <span className="flex justify-between items-center">
     <Rating name="size-large" readOnly={true} precision={0.1} value={( movie.vote_average / 2)}/>
     <span>{movie.vote_count}</span>
     </span>
     <p>{truncate(movie.overview, 60)}</p>
    </article>
   ))
   }
  </section>
 )
 
}