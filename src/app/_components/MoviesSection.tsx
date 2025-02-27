"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import Link from "next/link";

// import Image from "next/image"
import useAction from "@/hooks/useAction"
import useComedy from "@/hooks/useComedy"
import useDocumentary from "@/hooks/useDocumentary"
import useHorror from "@/hooks/useHorror"
import useOriginals from "@/hooks/useOriginals"
import useRomance from "@/hooks/useRomance"
import useTopRated from "@/hooks/useTopRated"
import useTrending from "@/hooks/useTrending"

import Row from "./row"

export default function MoviesSection() {
 const {action, isLoading} = useAction()
 const {comedy, isComedyLoading} = useComedy()
 const {documentary, isDocumentaryLoading} = useDocumentary()
 const {horror, isHorrorLoading} = useHorror()
 const {originals, isOriginalsLoading} = useOriginals()
 const {romance, isRomanceLoading} = useRomance()
 const {topRated, isTopRatedLoading} = useTopRated()
 const {trending, isTrendingLoading} = useTrending()


  const [search, setSearch] = useState("");

 console.log(action)
 return (
  <>
  <div className="flex justify-end p-4">
   {/* 🔍 Search Input */}
      <Input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[300px] border rounded-md px-4 py-2 mr-3"
      />

      {/* ⏬ Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/home">🏠 Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/movies">🎬 Movies</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/favorites">⭐ Favorites</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  </div>
   <section> 
   {isLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Trending🔥</h2>
     <Row data={action}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isComedyLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Comedy 🃏</h2>
     <Row data={comedy}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isDocumentaryLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Documentaries 📺</h2>
     <Row data={documentary}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isHorrorLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Horror 👻</h2>
     <Row data={horror}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isOriginalsLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Originals 🎥</h2>
     <Row data={originals}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isRomanceLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ romance 💞</h2>
     <Row data={romance}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isTopRatedLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Top Rated 🚀</h2>
     <Row data={topRated}/>
    </>
   
   )}
   
  </section>

   <section> 
   {isTrendingLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2 className="text-white p-4 font-semibold">Watchlist+ Top Rated 📈</h2>
     <Row data={trending}/>
    </>
   
   )}
   
  </section>
  </>
  
 )
 
}