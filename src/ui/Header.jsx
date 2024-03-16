import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Hamburger />
      <span className="hidden space-x-4 font-barlow uppercase text-grey-grey sm:block ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/plan">Create Your Plan</NavLink>
      </span>
    </header>
  );
}

export default Header;
