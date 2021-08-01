import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-size: 3vw;
  justify-content: center;
  margin-top: 40vh;
`;

const Loader = () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⏱
      </span>
    </Container>
  );
};

export default Loader;
