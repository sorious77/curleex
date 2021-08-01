import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import noPoster from "assets/noPosterSmall.jpg";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  display: block;
  font-size: 3rem;
  margin: 10px 0 20px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  font-size: 1rem;
  margin: 20px;
`;

const InfoItem = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  width: 70%;
  opacity: 0.8;
`;

const DetailPresenter = ({ result, loading, error, isMovie }) => {
  return loading ? (
    <>
      <Loader />
      <Helmet>
        <title>Loading | Curleex</title>
      </Helmet>
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {isMovie ? result.original_title : result.original_name} | Curleex
        </title>
      </Helmet>
      <Backdrop
        bgImg={
          result?.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : noPoster
        }
      ></Backdrop>
      <Content>
        <Cover
          bgImg={
            result?.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : noPoster
          }
        />
        <Data>
          <Title>
            {isMovie ? result.original_title : result.original_name}
          </Title>
          <InfoContainer>
            <InfoItem>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </InfoItem>
            <Divider>·</Divider>
            <InfoItem>
              {result.runtime
                ? result.runtime
                : result.episode_run_time
                ? result.episode_run_time[0]
                  ? result.episode_run_time[0]
                  : "??"
                : "??"}{" "}
              min
            </InfoItem>
            <Divider>·</Divider>
            <InfoItem>
              {result.genres?.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
            </InfoItem>
          </InfoContainer>
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
