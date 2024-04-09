import { QUESTION } from "./question";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";
import { useState } from "react";

/* eslint-disable react/prop-types */

function Products(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [count, setCount] = useState("");

  return (
    <div className="item relative flex w-[340px] flex-col items-center rounded-xl  sm:w-full">
      <button
        className="flex w-full items-center justify-between bg-light-cream py-4  text-left text-h4 font-bold leading-h4 text-grey-grey"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {props.title1}

        {!isOpen ? <Arrow /> : <ArrowUp />}
      </button>
      {isOpen && (
        <div className=" grid overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
          {QUESTION.map((question) => (
            <div key={question.id}>
              <button
                onClick={() => setCount(() => question.option1)}
                className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] "
              >
                <h4 className="pb-2 text-h4 font-bold text-black">
                  {question.option1}
                </h4>
                <p className="font-barlow text-body leading-body">
                  {question.info1}
                </p>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-rows-1 rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat p-8 text-left">
        <h4 className=" mb-4 text-h4 leading-h4 text-grey-grey">
          ORDER SUMMARY
        </h4>
        <h3>
          “I drink my coffee as {count} , with a _____ type of bean. _____
          ground ala _____, sent to me _____.” Create my plan! Order Summary “I
          drink coffee _____, with a _____ type of bean. _____ ground ala _____,
          sent to me _____.”
        </h3>
      </div>
    </div>
  );
}

export default Products;
