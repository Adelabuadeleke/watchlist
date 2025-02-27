"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetOriginals,
} from "@/lib/api";



function useOriginals() {
  const [originals, saveOriginals] = useState<Movie[]>([]);
  const [isOriginalsLoading, setOriginalsLoading] = useState<boolean>(false);

// console.log(action)
// console.log(httpGetAction())

  const getOriginals = useCallback(async () => {
    setOriginalsLoading(true)
    const fetchedOriginals = await httpGetOriginals();
    console.log("hook: ", fetchedOriginals)
    saveOriginals(fetchedOriginals);
    // console.log(fetchedCategories)
    setOriginalsLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getOriginals();
   }

   console.log('data', getData())
  }, [getOriginals]);

  return {
   isOriginalsLoading,
   originals
  }
}

export default useOriginals;