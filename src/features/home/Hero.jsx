function Hero() {
  return (
    <div className=" grid grid-rows-3 rounded-xl bg-[url('/src/images/mobile/image-hero-coffeepress.jpg')] bg-cover bg-center bg-no-repeat p-4  pb-10 pt-12 text-center">
      <h1 className=" mt-12 text-h2 font-bold leading-h2 text-light-cream">
        Great coffee made simple.
      </h1>

      <span className="px-1 pt-4  font-barlow text-body leading-body text-grey-grey ">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>

      <button className="mx-14 my-8 h-16 w-52 rounded-xl bg-dark-cyan font-bold text-white hover:bg-teal-300">
        Create your plan
      </button>
    </div>
  );
}

export default Hero;
