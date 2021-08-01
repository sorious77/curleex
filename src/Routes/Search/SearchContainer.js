import { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { TVAPI, MovieAPI } from "Components/API";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTVResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchByTerm = async () => {
    try {
      setLoading(true);
      const {
        data: { results: movieResults },
      } = await MovieAPI.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await TVAPI.search(searchTerm);
      setMovieResults(movieResults);
      setTVResults(tvResults);
    } catch {
      setError("Cannot find Information...");
    } finally {
      setLoading(false);
      setSearchTerm("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.length) {
      searchByTerm();
    }
  };

  const handleInput = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      handleInput={handleInput}
    />
  );
};

export default SearchContainer;
