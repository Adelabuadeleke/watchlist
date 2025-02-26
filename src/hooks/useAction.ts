"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";
import { type ApiResponse } from "@/types/api";

import { 
 httpGetAction, 
 httpGetComedy,
 httpGetDocumentaries,
 httpGetHorror,
 httpGetOriginals,
 httpGetRomance,
 httpGetTopRated,
 httpGetTrending 
} from "@/lib/api";



function useAction() {
  const [action, saveAction] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

// console.log(action)
// console.log(httpGetAction())

  const getAction = useCallback(async () => {
    setLoading(true)
    const fetchedAction = await httpGetAction();
    console.log("hook: ", fetchedAction)
    saveAction(fetchedAction);
    // console.log(fetchedCategories)
    setLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getAction();
   }

   console.log('data', getData())
  }, [getAction]);

  return {
   isLoading,
   action
  }
}

export default useAction;