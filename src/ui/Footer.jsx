import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
