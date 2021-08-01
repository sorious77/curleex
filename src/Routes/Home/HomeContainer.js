import HomePresenter from "./HomePresenter";
import { useEffect, useState } from "react";
import { MovieAPI } from "Components/API";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovieDatas = async () => {
      setLoading(true);

      try {
        const {
          data: { results: nowPlayingMovies },
        } = await MovieAPI.nowPlaying();
        const {
          data: { results: upcomingMovies },
        } = await MovieAPI.upcoming();
        const {
          data: { results: popularMovies },
        } = await MovieAPI.popular();
        setNowPlaying(nowPlayingMovies);
        setUpcoming(upcomingMovies);
        setPopular(popularMovies);
      } catch (error) {
        setError("Cannot find movies information...");
      } finally {
        setLoading(false);
      }
    };

    getMovieDatas();
  }, []);

  return (
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default HomeContainer;
