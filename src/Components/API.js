import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "be643e400993a9ad45ae67fe86b7ba54",
    language: "en-US",
  },
});

export const MovieAPI = {
  nowPlaying: () => API.get("movie/now_playing"),
  upcoming: () => API.get("movie/upcoming"),
  popular: () => API.get("movie/popular"),
};

export const TVAPI = {
  topRated: () => API.get("tv/top_rated"),
  popular: () => API.get("tv/popular"),
  airingToday: () => API.get("tv/airing_today"),
};
