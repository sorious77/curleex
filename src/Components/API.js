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
  movieDetail: (id) =>
    API.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    API.get("search/movie", {
      params: {
        query: term,
      },
    }),
};

export const TVAPI = {
  topRated: () => API.get("tv/top_rated"),
  popular: () => API.get("tv/popular"),
  airingToday: () => API.get("tv/airing_today"),
  tvDetail: (id) =>
    API.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    API.get("search/tv", {
      params: {
        query: term,
      },
    }),
};
