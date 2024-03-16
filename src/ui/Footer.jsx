import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoTwo from "../svg/LogoTwo";
import FaceBook from "../svg/FaceBook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";

function Footer() {
  return (
    <footer className=" block items-center bg-dark-grey-blue ">
      <LogoTwo />

      <span className="space-x-4 font-barlow uppercase text-grey-grey">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/plan">Create Your Plan</NavLink>
      </span>
      <span className="flex justify-center  space-x-4 ">
        <Link to="http://facebook.com">
          <FaceBook />
        </Link>
        <Link to="http://twitter.com">
          <Twitter />
        </Link>

        <Link to="http://instagram.com">
          <Instagram />
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
