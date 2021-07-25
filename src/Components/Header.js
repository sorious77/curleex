import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 1.3rem;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 90px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#9b59b6" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const NavLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = withRouter(({ location: { pathname } }) => (
  <NavHeader>
    <List>
      <Item current={pathname === "/"}>
        <NavLink to="/">Movies</NavLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <NavLink to="/tv">TV</NavLink>
      </Item>
      <Item current={pathname === "/search"}>
        <NavLink to="/search">Search</NavLink>
      </Item>
    </List>
  </NavHeader>
));

export default Header;
