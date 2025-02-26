"use client"

// import Image from "next/image"
import useAction from "@/hooks/useAction"
import Row from "./row"

export default function MoviesSection() {
 const {action, isLoading} = useAction()
 console.log(action)
 return (
  <section> 
   {isLoading?(
    <p>Loading</p>
   ):(
    <>
     <h2>Watchlist Trending🔥</h2>
     <Row data={action}/>
    </>
   
   )}
   
  </section>
 )
 
}