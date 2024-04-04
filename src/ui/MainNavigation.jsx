import Logo from "../svg/Logo";
import { NavLink } from "react-router-dom";
import Close from "./Close";
import { useState } from "react";
import Hamburger from "./Hamburger";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b py-2">
      <div className=" flex w-full flex-wrap items-center justify-between">
        <Logo />
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? <Hamburger /> : <Close />}
        </button>

        <nav
          className={`${isOpen ? "block" : "hidden"} w-full text-center sm:flex sm:w-auto sm:items-center`}
        >
          <ul className="text-h4 font-bold text-black sm:flex sm:justify-between sm:font-barlow sm:text-body sm:uppercase sm:text-grey-grey ">
            <li className="block py-2 sm:px-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="block py-2 sm:px-5">
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className="block sm:py-2">
              <NavLink to="/plan">Create Your Plan</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
