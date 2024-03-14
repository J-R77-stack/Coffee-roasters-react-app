function Hero() {
  return (
    <div className="bg-[url('/src/images/desktop/image-hero-coffeepress.jpg')] bg-cover bg-center bg-no-repeat">
      <h1 className=" text-light-cream text-h1 font-bold">
        Great coffee made simple.
      </h1>
      <br />
      <span className="text-grey-grey font-barlow text-body leading-body ">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </span>
      <br />
      <button className="bg-dark-cyan text-white">Create your plan</button>
    </div>
  );
}

export default Hero;
