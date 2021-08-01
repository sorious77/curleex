import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noPoster from "assets/noPosterSmall.jpg";

const Container = styled.div`
  font-size: 1rem;
`;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 6px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  position: absolute;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Year = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
`;

const Poster = ({ id, imageURL, title, rating, year, isMovie }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageURL ? `https://image.tmdb.org/t/p/w300${imageURL}` : noPoster
            }
          />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐
            </span>
            &nbsp;{rating}/10
          </Rating>
        </ImageContainer>
        <Title>
          {title.length > 12 ? `${title.substring(0, 12)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
