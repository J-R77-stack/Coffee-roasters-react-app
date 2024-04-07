import { QUESTION } from "./question";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";
import { useState } from "react";

/* eslint-disable react/prop-types */

function Products(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item relative flex w-[340px] flex-col items-center rounded-xl  sm:w-full">
      <button
        className="flex w-full items-center justify-between bg-light-cream py-4  text-left text-h4 font-bold leading-h4 text-grey-grey"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {props.title}

        {!isOpen ? <Arrow /> : <ArrowUp />}
      </button>
      {isOpen && (
        <div className=" grid overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
          {QUESTION.map((question) => (
            <div key={question.id}>
              <button className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] ">
                <h4 className="pb-2 text-h4 font-bold text-black">
                  {question.option}
                </h4>
                <p className="font-barlow text-body leading-body">
                  {question.info}
                </p>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
