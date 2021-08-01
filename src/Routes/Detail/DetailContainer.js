import DetailPresenter from "./DetailPresenter";
import { useEffect, useState } from "react";
import { MovieAPI, TVAPI } from "Components/API";

const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    match: {
      params: { id },
    },
    history: { push },
    location: { pathname },
  } = props;

  const isMovie = pathname.includes("/movie/");

  console.log(props);

  useEffect(() => {
    const errorCheck = () => {
      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
    };

    const getData = async () => {
      const parsedId = Number(id);
      let result = null;
      try {
        if (isMovie) {
          ({ data: result } = await MovieAPI.movieDetail(parsedId));
        } else {
          ({ data: result } = await TVAPI.tvDetail(parsedId));
        }
        setResult(result);
      } catch (error) {
        setError("Cannot find information...");
      } finally {
        setLoading(false);
      }
    };

    errorCheck();
    getData();
  }, [id, isMovie, push, pathname]);

  return (
    <DetailPresenter
      result={result}
      loading={loading}
      error={error}
      isMovie={isMovie}
    />
  );
};

export default DetailContainer;
