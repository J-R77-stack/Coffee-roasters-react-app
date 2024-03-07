import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <Link to="/">coffeeroasters</Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/plan">Create Your Plan</NavLink>
      <Link to="http://facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Link>
    </footer>
  );
}

export default Footer;
