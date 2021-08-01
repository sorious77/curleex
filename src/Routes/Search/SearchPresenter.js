import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 25px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  handleInput,
}) => {
  return (
    <>
      <Helmet>
        <title>Search | Curleex</title>
      </Helmet>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Input Search."
            value={searchTerm}
            onChange={handleInput}
          />
          <Input type="submit" value="Search" style={{ cursor: "pointer" }} />
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResults?.length > 0 ? (
              <Section title="Movie Results">
                {movieResults.map((movie) => (
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
            {tvResults?.length > 0 ? (
              <Section title="TV Results">
                {tvResults.map((program) => (
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
          </>
        )}
        {error ? <Message text={error} color="#e74c3c" /> : null}
        {movieResults?.length === 0 && tvResults?.length === 0 ? (
          <Message text={`Nothing Found...`} color="#9b59b6" />
        ) : null}
      </Container>
    </>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array.isRequired,
  tvResults: PropTypes.array.isRequired,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default SearchPresenter;
