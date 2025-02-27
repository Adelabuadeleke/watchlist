"use client"
import axios from "axios";

// types import
import { type ApiResponse } from "@/types/api";
import { type Movie } from "@/types/movie";

// vars
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY



// WatchList Originals
async function httpGetOriginals() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
 return response.data.results;
}

// Trending
async function httpGetTrending() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
 return response.data.results;
}

// Top Rated
async function httpGetTopRated() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`);
 return response.data.results;
}

// Action
async function httpGetAction() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
 console.log('api response',response)
 return response.data.results;
}

// Comedy
async function httpGetComedy() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);
 return response.data.results;
}

// Horror
async function httpGetHorror() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
 return response.data.results;
}

// Romance
async function httpGetRomance() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`);
 return response.data.results;
}

// Documentaries
async function httpGetDocumentaries() {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`);
 return response.data.results;
}

// Search 
async function httpGetSearch(searchQuery: string) {
 const response = await axios.get<ApiResponse<Movie>>(`${API_URL}/movie?api_key=${API_KEY}&query=${searchQuery}`)
 return response.data.results;

}


export {
 httpGetAction,
 httpGetComedy,
 httpGetDocumentaries,
 httpGetHorror,
 httpGetOriginals,
 httpGetRomance,
 httpGetTopRated,
 httpGetTrending,
 httpGetSearch
};