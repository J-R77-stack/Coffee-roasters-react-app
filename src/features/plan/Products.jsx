import { QUESTION } from "./question";
import { QUESTION2 } from "./question2";
import { QUESTION3 } from "./question3";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";
import { useState } from "react";

/* eslint-disable react/prop-types */

function Products(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");
  const [count3, setCount3] = useState("");

  return (
    <>
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
      </div>
      <div className="item relative flex w-[340px] flex-col items-center rounded-xl  sm:w-full">
        <button
          className="flex w-full items-center justify-between bg-light-cream py-4  text-left text-h4 font-bold leading-h4 text-grey-grey"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          What type of coffee?
          {!isOpen ? <Arrow /> : <ArrowUp />}
        </button>
        {isOpen && (
          <div className=" grid overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
            {QUESTION2.map((question2) => (
              <div key={question2.id}>
                <button
                  onClick={() => setCount2(() => question2.option2)}
                  className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] "
                >
                  <h4 className="pb-2 text-h4 font-bold text-black">
                    {question2.option2}
                  </h4>
                  <p className="font-barlow text-body leading-body">
                    {question2.info2}
                  </p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="item relative flex w-[340px] flex-col items-center rounded-xl  sm:w-full">
        <button
          className="flex w-full items-center justify-between bg-light-cream py-4  text-left text-h4 font-bold leading-h4 text-grey-grey"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          What type of coffee?
          {!isOpen ? <Arrow /> : <ArrowUp />}
        </button>
        {isOpen && (
          <div className=" grid overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
            {QUESTION3.map((question3) => (
              <div key={question3.id}>
                <button
                  onClick={() => setCount3(() => question3.option3)}
                  className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] "
                >
                  <h4 className="pb-2 text-h4 font-bold text-black">
                    {question3.option3}
                  </h4>
                  <p className="font-barlow text-body leading-body">
                    {question3.info3}
                  </p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-32 grid grid-rows-1 rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat p-8 text-left">
        <h4 className=" mb-4 font-barlow text-body leading-body text-grey-grey">
          ORDER SUMMARY
        </h4>
        <h4 className="text-h4 font-bold leading-h4 text-light-cream">
          “I drink my coffee as {count}, with a{count2} type of bean. {count3}
          ground ala _____, sent to me _____.” Create my plan! Order Summary “I
          drink coffee _____, with a _____ type of bean. _____ ground ala _____,
          sent to me _____.”
        </h4>
      </div>
      ;
    </>
  );
}

export default Products;
