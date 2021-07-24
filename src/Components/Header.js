import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
