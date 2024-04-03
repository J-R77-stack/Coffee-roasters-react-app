import Logo from "../svg/Logo";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="border-b py-2">
      <div className=" flex items-center justify-between">
        <Logo />
        <nav className="flex w-auto items-center">
          <ul className=" flex justify-between font-barlow uppercase text-grey-grey ">
            <li className="px-5 py-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="px-5 py-2">
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className=" py-2">
              <NavLink to="/plan">Create Your Plan</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
