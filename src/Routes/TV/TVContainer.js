import TVPresenter from "./TVPresenter";
import { TVAPI } from "Components/API";
import { useEffect, useState } from "react";

const TVContainer = () => {
  const [airingToday, setAiringToday] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTVDatas = async () => {
      setLoading(true);

      try {
        const {
          data: { results: airingTodayTVs },
        } = await TVAPI.airingToday();
        const {
          data: { results: topRatedTVs },
        } = await TVAPI.topRated();
        const {
          data: { results: popularTVs },
        } = await TVAPI.popular();
        setAiringToday(airingTodayTVs);
        setTopRated(topRatedTVs);
        setPopular(popularTVs);
      } catch (error) {
        setError("Cannot find TV information...");
      } finally {
        setLoading(false);
      }
    };

    getTVDatas();
  }, []);

  return (
    <TVPresenter
      airingToday={airingToday}
      topRated={topRated}
      popular={popular}
      loading={loading}
      error={error}
    />
  );
};

export default TVContainer;
