import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "be643e400993a9ad45ae67fe86b7ba54",
    language: "en-US",
  },
});
