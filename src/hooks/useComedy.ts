"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetComedy
} from "@/lib/api";



function useComedy() {
  const [comedy, saveComedy] = useState<Movie[]>([]);
  const [isComedyLoading, setComedyLoading] = useState<boolean>(false);

// console.log(action)
// console.log(httpGetAction())

  const getComedy = useCallback(async () => {
    setComedyLoading(true)
    const fetchedComedy = await httpGetComedy();
    console.log("hook: ", fetchedComedy)
    saveComedy(fetchedComedy);
    // console.log(fetchedCategories)
    setComedyLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getComedy();
   }

   console.log('data', getData())
  }, [getComedy]);

  return {
   isComedyLoading,
   comedy
  }
}

export default useComedy;