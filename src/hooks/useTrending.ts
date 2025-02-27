"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetTrending 
} from "@/lib/api";



function useTrending() {
  const [trending, saveTrending] = useState<Movie[]>([]);
  const [isTrendingLoading, setTrendingLoading] = useState<boolean>(false);

  const getTrending = useCallback(async () => {
    setTrendingLoading(true)
    const fetchedTrending = await httpGetTrending();
    console.log("hook: ", fetchedTrending)
    saveTrending(fetchedTrending);
    // console.log(fetchedCategories)
    setTrendingLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getTrending();
   }

   console.log('data', getData())
  }, [getTrending]);

  return {
   isTrendingLoading,
   trending
  }
}

export default useTrending;