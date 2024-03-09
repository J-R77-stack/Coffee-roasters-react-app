import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo";
import FaceBook from "../svg/FaceBook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";

function Footer() {
  return (
    <footer className="text-grey-grey uppercase tracking-[5px]">
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
    </footer>
  );
}

export default Footer;
