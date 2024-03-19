import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoTwo from "../svg/LogoTwo";
import FaceBook from "../svg/FaceBook";
import Twitter from "../svg/Twitter";
import Instagram from "../svg/Instagram";

function Footer() {
  return (
    <footer className="mb-10 mt-10 bg-dark-grey-blue">
      <LogoTwo />

      <span className=" grid grid-rows-3 gap-4  text-center font-barlow uppercase text-grey-grey">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/plan">Create Your Plan</NavLink>
      </span>
      <span className="mb-10 mt-10 flex justify-center gap-8  ">
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
