import { NavLink } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="mt-6">
      <h3 className=" pt-10 text-center text-h4 font-bold text-grey-grey sm:mb-6 sm:pt-0 sm:text-left lg:pl-[2rem]">
        How it works
      </h3>
      <div className="hidden sm:flex lg:pl-[2rem] lg:pt-10">
        <div className="sm:flex">
          <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11 "></div>
          <div>
            <hr className="border-2 border-solid border-pale-orange sm:mt-5 sm:w-48 lg:w-[15rem] xl:w-[21rem] 2xl:w-[27rem]" />
          </div>
        </div>
        <div className="sm:flex">
          <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11"></div>
          <div>
            <hr className="border-2 border-solid border-pale-orange sm:mt-5 sm:w-44 lg:w-[15rem] xl:w-[21rem] 2xl:w-[26rem]" />
          </div>
        </div>
        <div className="sm:flex">
          <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11"></div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3 sm:gap-[1rem] lg:gap-[1rem] lg:pl-[2rem] lg:pr-[2rem] ">
        <div>
          <h1 className=" mt-10 text-center text-h1 font-bold text-pale-orange sm:text-left">
            01
          </h1>
          <h4
            className="mb-6 text-center text-h4 font-bold leading-h4 
          sm:pr-10  sm:text-left"
          >
            Pick your coffee
          </h4>
          <p className="text-center font-barlow sm:text-left">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div>
          <h1 className=" mt-10 text-center text-h1 font-bold text-pale-orange sm:text-left">
            02
          </h1>
          <h4 className="mb-6 text-center  text-h4 font-bold leading-h4 sm:text-left">
            Choose the frequency
          </h4>
          <p className="text-center font-barlow sm:text-left">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div>
          <h1 className=" mt-10 text-center text-h1 font-bold text-pale-orange sm:text-left">
            03
          </h1>
          <h4 className="mb-6 text-center text-h4 font-bold leading-h4 sm:pr-10 sm:text-left">
            Receive and enjoy!
          </h4>
          <p className="pb-8 text-center font-barlow sm:text-left">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
      <NavLink to="/plan">
        <button className="mx-16 my-8 h-16 w-52 rounded-xl bg-dark-cyan font-bold text-white hover:bg-teal-300 sm:mx-0 lg:mx-[2rem] ">
          Create your plan
        </button>
      </NavLink>
    </div>
  );
}

export default HowItWorks;
