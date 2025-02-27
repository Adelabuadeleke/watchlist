import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
import { type Movie } from "@/types/movie";
import { httpGetSearch } from "@/lib/api";

function useMovies(searchQuery: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const getSearch = useCallback(async ()=> {
    if (!searchQuery) return;
    setIsSearchLoading(true);
    const fetchedSearch = await httpGetSearch(searchQuery);
    setMovies(fetchedSearch)
    setIsSearchLoading(false);

  },[searchQuery])
   

    // await axios
    //   .get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_KEY&query=${searchQuery}`)
    //   .then((res) => setMovies(res.data.results))
    //   .finally(() => setIsLoading(false));
    useEffect(() => {
     async function getData() {
      await getSearch();
     }
    
     console.log('data', getData())
    }, [getSearch]);

  return { movies, isSearchLoading };
}

export default useMovies;
