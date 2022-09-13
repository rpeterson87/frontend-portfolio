import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav className="navStyle">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;