"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetTopRated,
} from "@/lib/api";



function useTopRated() {
  const [topRated, saveTopRated] = useState<Movie[]>([]);
  const [isTopRatedLoading, setTopRatedLoading] = useState<boolean>(false);

  const getTopRated = useCallback(async () => {
    setTopRatedLoading(true)
    const fetchedTopRated = await httpGetTopRated();
    console.log("hook: ", fetchedTopRated)
    saveTopRated(fetchedTopRated);
    // console.log(fetchedCategories)
    setTopRatedLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getTopRated();
   }

   console.log('data', getData())
  }, [getTopRated]);

  return {
   isTopRatedLoading,
   topRated
  }
}

export default useTopRated;