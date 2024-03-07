import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">coffeeroasters</Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About us</NavLink>
      <NavLink to="/plan">Create Your Plan</NavLink>
    </header>
  );
}

export default Header;
