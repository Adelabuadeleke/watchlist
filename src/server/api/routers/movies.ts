// import { z } from "zod";
// // import { publicProcedure, router } from "../trpc";
// import { createTRPCRouter, publicProcedure } from "../trpc";
// // import router
// import axios from "axios";
// import router from "next/router";

// const TMDB_API_URL = "https://api.themoviedb.org/3";
// const API_KEY = process.env.TMDB_API_KEY;


// const movieSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   overview: z.string(),
//   backdrop_path: z.string().optional(),
//   poster_path: z.string().optional(),
//   release_date: z.string(),
//   genre_ids: z.array(z.number()),
//   vote_average: z.number(),
//   vote_count: z.number(),
//   popularity: z.number(),
// });


// const movieApiResponseSchema = z.object({
//   page: z.number(),
//   results: z.array(movieSchema), 
//   total_pages: z.number(),
//   total_results: z.number(),
// });

// type MovieApiResponse = z.infer<typeof movieApiResponseSchema>;

// export const moviesRouter = createTRPCRouter({
//   // Fetch movies based on a search query
//   search: publicProcedure
//     .input(z.object({ query: z.string().min(1) })) // Input validation
//     .query(async ({ input }) => {
//       const API_KEY = process.env.TMDB_API_KEY;
//       const response = await axios.get<MovieApiResponse>(
//         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input.query}`
//       );

//       return movieApiResponseSchema.array().parse(response.data.results); // Type-safe response
//       // return searchResult.results
//     }),

//   // Fetch trending movies
//   trending: publicProcedure.query(async () => {
//     const API_KEY = process.env.TMDB_API_KEY;
//     const response = await axios.get<MovieApiResponse>(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
//     );

//     return movieApiResponseSchema.array().parse(response.data.results); // Type-safe response
//   }),
// });