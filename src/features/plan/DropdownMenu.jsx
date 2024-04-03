import { useState } from "react";
import Hamburger from "../../ui/Hamburger";
import Close from "../../ui/Close";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item relative sm:hidden">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen ? <Hamburger /> : <Close />}
      </button>
      {isOpen && (
        <div className=" absolute ">
          <div className=" font-barlow text-black ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/plan">Create Your Plan</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
