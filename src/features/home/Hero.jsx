function Hero() {
  return (
    <div className=" bg-[url('/src/images/mobile/image-hero-coffeepress.jpg')] bg-cover bg-center bg-no-repeat text-center">
      <h1 className=" text-h1 font-bold leading-big text-light-cream">
        Great coffee made simple.
      </h1>
      <br />
      <span className="  font-barlow text-body leading-body text-grey-grey ">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>
      <br />
      <button className="mb-20 mt-12 bg-dark-cyan text-white">
        Create your plan
      </button>
    </div>
  );
}

export default Hero;
