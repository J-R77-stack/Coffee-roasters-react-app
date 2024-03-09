import { Link, NavLink } from "react-router-dom";
import Logo from "../svg/Logo";
import FaceBook from "../svg/FaceBook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";

function Header() {
  return (
    <header>
      <Logo />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/plan">Create Your Plan</NavLink>
      <Link to="http://facebook.com">
        <FaceBook />
      </Link>
      <Link to="http://twitter.com">
        <Twitter />
      </Link>

      <Link to="http://instagram.com">
        <Instagram />
      </Link>
    </header>
  );
}

export default Header;
