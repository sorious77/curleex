import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>Movies | Curleex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying?.length > 0 ? (
            <Section title="Now Playing">
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageURL={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie?.release_date?.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          ) : null}
          {upcoming?.length > 0 ? (
            <Section title="Upcoming Movies">
              {upcoming.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageURL={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date?.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          ) : null}
          {popular?.length > 0 ? (
            <Section title="Popular Movies">
              {popular.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageURL={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date?.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          ) : null}
          {error ? <Message text={error} color="#e74c3c" /> : null}
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  /*nowPlaying: PropTypes.array.isRequired,
  upcoming: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  */
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
