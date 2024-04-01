import DropdownMenu from "./DropdownMenu";

function Plan() {
  return (
    <>
      <div className="grid grid-rows-2 rounded-xl bg-[url('/src/images/mobile/image-hero-blackcup.jpg')] bg-cover bg-center bg-no-repeat  pb-16 pt-10 text-center">
        <h2 className="mt-20 pl-3 pr-3 text-h2 font-bold leading-h2 text-light-cream">
          Create a plan
        </h2>
        <p className="mt-4 pb-10 pl-4 pr-4 font-barlow text-body leading-body text-grey-grey">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div className="mt-16 h-[1100px] rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-rows-3 text-center">
          <div>
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange">
              01
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream">
              Pick your coffee
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. Theres new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div>
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange">
              02
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream">
              Choose the frequency
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div>
            <h1 className="leading-h1 mt-10 text-h1 font-bold text-pale-orange">
              03
            </h1>
            <h3 className="mb-5 text-h3 font-bold leading-h3 text-light-cream">
              Recieve and enjoy!
            </h3>
            <p className="pl-3 pr-3 font-barlow text-body leading-body text-grey-grey">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
      <div>
        <DropdownMenu/>
      </div>
    </>
  );
}

export default Plan;
