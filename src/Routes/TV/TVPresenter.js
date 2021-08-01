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

const TVPresenter = ({ airingToday, topRated, popular, loading, error }) => {
  return (
    <>
      <Helmet>
        <title>TV Shows | Curleex</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated?.length > 0 ? (
            <Section title="Top Rated Programs">
              {topRated.map((program) => (
                <Poster
                  key={program.id}
                  id={program.id}
                  imageURL={program.poster_path}
                  title={program.original_name}
                  rating={program.vote_average}
                  year={program?.first_air_date?.substring(0, 4)}
                  isMovie={false}
                />
              ))}
            </Section>
          ) : null}
          {popular?.length > 0 ? (
            <Section title="Popular Programs">
              {popular.map((program) => (
                <Poster
                  key={program.id}
                  id={program.id}
                  imageURL={program.poster_path}
                  title={program.original_name}
                  rating={program.vote_average}
                  year={program?.first_air_date?.substring(0, 4)}
                  isMovie={false}
                />
              ))}
            </Section>
          ) : null}
          {airingToday?.length > 0 ? (
            <Section title="Today's Programs">
              {airingToday.map((program) => (
                <Poster
                  key={program.id}
                  id={program.id}
                  imageURL={program.poster_path}
                  title={program.original_name}
                  rating={program.vote_average}
                  year={program?.first_air_date?.substring(0, 4)}
                  isMovie={false}
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

TVPresenter.propTypes = {
  toprated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  /*toprated: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,*/
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
