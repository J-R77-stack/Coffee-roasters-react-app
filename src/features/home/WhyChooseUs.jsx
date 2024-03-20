function WhyChooseUs() {
  return (
    <div className="mb-[40rem] h-[55rem] rounded-xl bg-[url('/src/images/mobile/bg-steps.png')] px-6 pb-8 pt-16 sm:h-[40rem]">
      <h3 className="pb-6 text-center text-h3 font-bold leading-h3 text-white">
        Why choose us?
      </h3>
      <p className="pb-16 text-center font-barlow text-body leading-body text-grey-grey sm:pl-12 sm:pr-12">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>

      <div className="grid gap-6">
        <div className="rounded-xl bg-dark-cyan p-12 pt-16 text-center sm:grid sm:grid-cols-2 sm:p-0 sm:pb-10 sm:text-left">
          <div className="relative flex">
            <img
              src="/src/images/desktop/svg/icon-coffee-bean.svg"
              alt="coffee bean"
              className="m-auto "
            />
          </div>
          <div>
            <h4 className="pb-5 pt-12 text-h4 font-bold leading-h4 text-white">
              Best Quality
            </h4>
            <p className="pb-4 text-center font-barlow text-body leading-body text-white sm:text-left">
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-dark-cyan p-10 pt-16 text-center sm:grid sm:grid-cols-2 sm:p-0 sm:pb-10 sm:text-left ">
          <div className="relative flex">
            <img
              src="/src/images/desktop/svg/icon-gift.svg"
              alt="gift"
              className="m-auto"
            />
          </div>
          <div>
            <h4 className="pb-5 pt-12 text-h4 font-bold  leading-h4 text-white sm:pb-2">
              Exclusive benefits
            </h4>
            <p className="p-2 pb-4 text-center font-barlow text-body leading-body text-white sm:pl-0  sm:text-left">
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-dark-cyan p-12 pt-16 text-center sm:grid sm:grid-cols-2 sm:p-0 sm:pb-10 sm:text-left ">
          <div className="relative flex">
            <img
              src="/src/images/desktop/svg/icon-truck.svg"
              alt="truck"
              className="m-auto"
            />
          </div>
          <div>
            <h4 className="pb-5 pt-12 text-h4 font-bold  leading-h4 text-white sm:pt-14">
              Free shipping
            </h4>
            <p className="pb-4 text-center font-barlow text-body leading-body text-white sm:pb-8  sm:text-left">
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
