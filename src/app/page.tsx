// import Link from "next/link";
// import component
// import { useState, useEffect } from "react";
import Nav from "./_components/nav";
import RandomBanner from "./_components/RandomBanner";
import MoviesSection from "./_components/MoviesSection";
import { Movie } from "@/types/movie";
// import { httpGetAction } from "@/lib/api";
// import useAction from "@/hooks/useMovies";

// import hooks
// import useAction from "@/hooks/useMovies";


export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  //  const [movie, setMovie] = useState<Movie[]>([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await httpGetAction();
  //       console.log(request)
  //       setMovie(
  //         request[Math.floor(Math.random() * Number(request - 1))]
  //       )
        
  //     } 

  //     fetchData() 
  //   }, []);

  
  return (
    <main className="flex flex-col bg-[#111]">
      <RandomBanner/>
      <section>
        <MoviesSection />
      </section>
    </main>
  );
}
