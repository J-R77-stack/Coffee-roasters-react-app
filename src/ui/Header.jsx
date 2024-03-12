import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo";

function Header() {
  return (
    <header>
      <Logo />
      <span className="text-grey-grey space-x-4 uppercase ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/plan">Create Your Plan</NavLink>
      </span>
    </header>
  );
}

export default Header;
