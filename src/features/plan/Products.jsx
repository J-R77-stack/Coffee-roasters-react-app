import { QUESTION } from "./question";
import { QUESTION2 } from "./question2";
import { QUESTION3 } from "./question3";
import { QUESTION4 } from "./question4";
import { QUESTION5 } from "./question5";
import Arrow from "../../svg/Arrow";
import ArrowUp from "../../svg/ArrowUp";
import { useState } from "react";
import Modal from "./Modal";

/* eslint-disable react/prop-types */

function Products(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [ModalOpen, setModalOpen] = useState(false);

  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");
  const [count3, setCount3] = useState("");
  const [count4, setCount4] = useState("");
  const [count5, setCount5] = useState("");

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
          <div className=" grid gap-3 overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
            {QUESTION.map((question) => (
              <div key={question.id}>
                <button
                  onClick={() => setCount(() => question.option1)}
                  className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan  sm:h-[240px] "
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
          <div className=" grid gap-3 overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
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
          <div className="grid gap-3 overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
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
      <div className="item relative flex w-[340px] flex-col items-center rounded-xl  sm:w-full">
        <button
          className="flex w-full items-center justify-between bg-light-cream py-4  text-left text-h4 font-bold leading-h4 text-grey-grey"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Want us to grind them?
          {!isOpen ? <Arrow /> : <ArrowUp />}
        </button>
        {isOpen && (
          <div className="grid gap-3 overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
            {QUESTION4.map((question4) => (
              <div key={question4.id}>
                <button
                  onClick={() => setCount4(() => question4.option4)}
                  className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] "
                >
                  <h4 className="pb-2 text-h4 font-bold text-black">
                    {question4.option4}
                  </h4>
                  <p className="font-barlow text-body leading-body">
                    {question4.info4}
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
          How often should we deliver?
          {!isOpen ? <Arrow /> : <ArrowUp />}
        </button>
        {isOpen && (
          <div className="grid gap-3 overflow-hidden transition-all duration-300 ease-in-out sm:grid-cols-3 sm:gap-3">
            {QUESTION5.map((question5) => (
              <div key={question5.id}>
                <button
                  onClick={() => setCount5(() => question5.option5)}
                  className="rounded-xl bg-zinc-200 p-5 text-left hover:bg-pale-orange focus:bg-dark-cyan sm:h-[240px] "
                >
                  <h4 className="pb-2 text-h4 font-bold text-black">
                    {question5.option5}
                  </h4>
                  <p className="font-barlow text-body leading-body">
                    {question5.info5}
                  </p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mb-10 mt-32 grid grid-rows-1 rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat p-8 text-left">
        <h4 className=" mb-4 font-barlow text-body leading-body text-grey-grey">
          ORDER SUMMARY
        </h4>
        <h4 className="text-h4 font-bold leading-h4 text-light-cream">
          “I drink my coffee as{" "}
          <span className="text-dark-cyan"> {count} </span>, with a
          <span className="text-dark-cyan"> {count2} </span> type of bean.
          <span className="text-dark-cyan"> {count3} </span>
          ground ala <span className="text-dark-cyan"> {count4} </span>, sent to
          me <span className="text-dark-cyan"> {count5} </span>.”
        </h4>
      </div>
      <>
        <div>
          <button
            onClick={() => setModalOpen(true)}
            className="mx-16 my-8 mt-10 h-16 w-52 rounded-xl bg-dark-cyan font-bold text-white hover:bg-teal-300 sm:mx-0 lg:mx-[2rem] "
          >
            Create my plan!
          </button>
          <Modal open={ModalOpen} onClose={() => setModalOpen(false)}>
            <p size={56} className="mx-auto text-red-500">
              X
            </p>
          </Modal>
        </div>
      </>
    </>
  );
}

export default Products;
