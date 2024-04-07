import Questions from "./Questions";
import Products from "./Products.jsx";
import AccordianQuestion from "./AccordianQuestion.jsx";

function Plan() {
  return (
    <>
      <div className="grid grid-rows-2 rounded-xl bg-[url('/src/images/mobile/image-hero-blackcup.jpg')] bg-cover bg-center bg-no-repeat pb-16 pt-10 text-center sm:bg-[url('/src/images/tablet/image-hero-blackcup.jpg')] sm:pl-6 sm:text-left lg:bg-[url('/src/images/desktop/image-hero-blackcup.jpg')]">
        <h2 className="lg:leading-h1 mt-20 pl-3 pr-3 text-h2 font-bold leading-h2 text-light-cream lg:text-h1">
          Create a plan
        </h2>
        <p className="mt-4 pb-10 pl-4 pr-4 font-barlow text-body leading-body text-grey-grey sm:pr-52 lg:mt-6 lg:pr-96">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div className="mt-16 h-[1100px] rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat sm:h-[610px] sm:bg-[url('/src/images/tablet/bg-steps.png')] lg:h-[600px]">
        <div className="hidden sm:flex sm:pl-8 sm:pt-20 lg:pl-[2rem]  ">
          <div className="sm:flex">
            <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11 "></div>
            <div>
              <hr className="border-2 border-solid border-pale-orange sm:mt-5 sm:w-40 lg:w-[16rem]" />
            </div>
          </div>
          <div className="sm:flex">
            <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11"></div>
            <div>
              <hr className="border-2 border-solid border-pale-orange sm:mt-5 sm:w-[155px] lg:w-[15rem]" />
            </div>
          </div>
          <div className="sm:flex">
            <div className="rounded-full border-2 border-solid border-dark-cyan sm:h-11 sm:w-11"></div>
          </div>
        </div>

        <div className="grid grid-rows-3 text-center sm:flex  sm:p-8 sm:text-left ">
          <div className="sm:basis-1/3">
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange sm:mt-2">
              01
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream lg:pr-10">
              Pick your coffee
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey sm:p-0">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. Theres new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="sm:basis-1/3 lg:pl-4">
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange sm:mt-2 sm:pl-2">
              02
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream sm:pl-2">
              Choose the frequency
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey sm:p-0 sm:pl-2">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="sm:basis-1/3 lg:pl-7">
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange sm:mt-2">
              03
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream">
              Recieve and enjoy!
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey sm:p-0">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Questions />
        <AccordianQuestion />
        <Products />
        <div className="grid grid-rows-1 rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat p-8 text-left">
          <h4 className=" mb-4 text-h4 leading-h4 text-grey-grey">
            ORDER SUMMARY
          </h4>
          <h3 className="text-h3 font-bold leading-h3 text-light-cream"></h3>
        </div>
        <button className="mx-16 my-8 h-16 w-52 rounded-xl bg-dark-cyan font-bold text-white hover:bg-teal-300 sm:mx-60 lg:mx-0 lg:my-8">
          Create my plan!
        </button>
      </div>
    </>
  );
}

export default Plan;
