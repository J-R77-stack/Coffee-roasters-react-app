import { useState } from "react";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item relative mt-32 flex h-[340px] w-[340px] flex-col items-center rounded-xl">
      <button
        className="flex w-full items-center justify-between bg-light-cream text-left  text-h4 font-bold leading-h4 text-grey-grey"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        How do you drink <br />
        your coffee?
        {!isOpen ? <Arrow /> : <ArrowUp />}
      </button>
    </div>
  );
}

export default DropdownMenu;
