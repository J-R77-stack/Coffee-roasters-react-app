import { Link, NavLink } from "react-router-dom";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../svg/Logo";

function Header() {
  return (
    <header>
      <Logo />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/plan">Create Your Plan</NavLink>
      <Link to="http://facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Link>
      <Link to="http://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to="http://instagram.com">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </header>
  );
}

export default Header;
