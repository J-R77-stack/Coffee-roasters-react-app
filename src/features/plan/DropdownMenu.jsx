import { useState } from "react";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item relative mb-[200px] mt-32 flex h-[340px] w-[340px] flex-col items-center rounded-xl">
      <button
        className="flex w-full items-center justify-between bg-light-cream text-left  text-h4 font-bold leading-h4 text-grey-grey"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        How do you drink <br />
        your coffee?
        {!isOpen ? <Arrow /> : <ArrowUp />}
      </button>
      {isOpen && (
        <div className=" absolute top-20  flex w-full flex-col items-start ">
          <button className="rounded-xl bg-zinc-200 p-6 text-left">
            <h4 className="pb-2 text-h4 font-bold text-black">Capsule</h4>
            <p className="font-barlow text-body leading-body">
              Compatible with Nespresso systems and similar brewers
            </p>
          </button>
          <button className="mt-5 rounded-xl bg-zinc-200 p-6 text-left">
            <h4 className="pb-2 text-h4 font-bold text-black">Filter</h4>
            <p className="font-barlow text-body leading-body">
              For pour over or drip methods like Aeropress, Chemex, and V60
            </p>
          </button>
          <button className=" mt-5 rounded-xl bg-zinc-200 p-6 text-left">
            <h4 className="pb-2 text-h4 font-bold text-black">Espresso</h4>
            <p className="font-barlow text-body leading-body">
              Dense and finely ground beans for an intense, flavorful experience
            </p>
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
