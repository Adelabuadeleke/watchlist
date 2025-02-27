"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetHorror,
} from "@/lib/api";



function useHorror() {
  const [horror, saveHorror] = useState<Movie[]>([]);
  const [isHorrorLoading, setHorrorLoading] = useState<boolean>(false);

  const getHorror = useCallback(async () => {
    setHorrorLoading(true)
    const fetchedHorror = await httpGetHorror();
    console.log("hook: ", fetchedHorror)
    saveHorror(fetchedHorror);
    // console.log(fetchedCategories)
    setHorrorLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getHorror();
   }

   console.log('data', getData())
  }, [getHorror]);

  return {
   isHorrorLoading,
   horror
  }
}

export default useHorror;