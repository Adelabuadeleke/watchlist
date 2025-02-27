"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetRomance
} from "@/lib/api";



function useRomance() {
  const [romance, saveRomance] = useState<Movie[]>([]);
  const [isRomanceLoading, setRomanceLoading] = useState<boolean>(false);

  const getRomance = useCallback(async () => {
    setRomanceLoading(true)
    const fetchedRomance = await httpGetRomance();
    console.log("hook: ", fetchedRomance)
    saveRomance(fetchedRomance);
    setRomanceLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getRomance();
   }

   console.log('data', getData())
  }, [getRomance]);

  return {
   isRomanceLoading,
   romance
  }
}

export default useRomance;