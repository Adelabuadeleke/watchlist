"use client";

import { useEffect, useCallback, useState } from "react";

import { type Movie } from "@/types/movie";

import { 
 httpGetDocumentaries
} from "@/lib/api";



function useDocumentary() {
  const [documentary, saveDocumentary] = useState<Movie[]>([]);
  const [isDocumentaryLoading, setDocumentaryLoading] = useState<boolean>(false);

  const getDocumentary = useCallback(async () => {
    setDocumentaryLoading(true)
    const fetchedDocumentary = await httpGetDocumentaries();
    // console.log("hook: ", fetchedDocumentary)
    saveDocumentary(fetchedDocumentary);
    // console.log(fetchedCategories)
    setDocumentaryLoading(false)
  }, []);

  useEffect(() => {
   async function getData() {
    await getDocumentary();
   }

   console.log('data', getData())
  }, [getDocumentary]);

  return {
   isDocumentaryLoading,
   documentary
  }
}

export default useDocumentary;