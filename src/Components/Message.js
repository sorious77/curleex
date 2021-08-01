import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 40px;
  color: ${(props) => props.color};
`;

const Message = ({ text, color }) => {
  return (
    <Container>
      <Text color={color}>{text}</Text>
    </Container>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
