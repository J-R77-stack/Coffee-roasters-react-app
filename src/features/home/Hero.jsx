function Hero() {
  return (
    <div className="  grid grid-rows-3 rounded-xl bg-[url('/src/images/mobile/image-hero-coffeepress.jpg')] bg-cover bg-center bg-no-repeat p-4  pb-10 pt-12 text-center sm:bg-[url('/src/images/tablet/image-hero-coffeepress.jpg')] sm:pl-10 sm:pr-32 sm:text-left lg:bg-[url('/src/images/desktop/image-hero-coffeepress.jpg')] xl:pb-0">
      <h1 className="mt-12 text-h2 font-bold leading-h2 text-light-cream sm:pr-28 xl:pl-14 xl:pr-[30rem] xl:text-[72px] xl:leading-[72px] xl:tracking-wider">
        Great coffee made simple.
      </h1>

      <span className=" px-1 pt-4 font-barlow text-body leading-body text-grey-grey sm:pt-9  md:pr-24 xl:pb-0 xl:pl-14 xl:pr-[40rem]">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>

      <button className="mx-14 my-8 h-16 w-52 rounded-xl bg-dark-cyan font-bold text-white hover:bg-teal-300 sm:mx-1 xl:mx-14 xl:my-0">
        Create your plan
      </button>
    </div>
  );
}

export default Hero;
