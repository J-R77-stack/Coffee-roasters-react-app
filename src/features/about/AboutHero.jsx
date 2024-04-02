function AboutHero() {
  return (
    <>
      <div className="grid grid-rows-2 rounded-xl  bg-[url('/src/images/mobile/image-hero-whitecup.jpg')] bg-cover bg-center bg-no-repeat p-4 pb-16 pt-12 text-center sm:bg-[url('/src/images/tablet/image-hero-whitecup.jpg')] sm:p-8 sm:text-left lg:bg-[url('/src/images/desktop/image-hero-whitecup.jpg')] lg:p-16">
        <h3 className="mt-20 text-h3 font-bold leading-h3 text-light-cream sm:mb-8">
          About us
        </h3>
        <p className="font-barlow text-body leading-body text-light-cream sm:pr-40 lg:pr-[350px]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2">
        <div className=" mt-32 h-96 rounded-xl bg-[url('/src/images/mobile/image-commitment.jpg')] bg-cover bg-center bg-no-repeat sm:h-[560px] sm:bg-[url('/src/images/tablet/image-commitment.jpg')] lg:sm:bg-[url('/src/images/desktop/image-commitment.jpg')] lg:h-[500px] lg:w-[400px]"></div>
        <div className="sm:ml-10">
          <h3 className="mt-20 text-center text-h3 font-bold leading-h3 text-black sm:mt-36 sm:text-left lg:mt-48">
            Our commitment
          </h3>
          <p className="mt-10 pb-32 text-center font-barlow text-body leading-body text-grey-grey sm:mt-4 sm:text-left">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <div className=" grid h-[600px] place-content-center rounded-xl bg-[url('/src/images/mobile/bg-quality.png')] bg-cover bg-center bg-no-repeat sm:mt-[80px] sm:h-[660px] sm:bg-[url('/src/images/tablet/bg-quality.png')] lg:flex lg:h-[450px] lg:flex-row">
        <div className="lg:bg-[url('/src/images/desktop/image-quality.jpg')]lg:p-0 mb-10 ml-10 h-[150px] w-64 rounded-xl bg-[url('/src/images/mobile/image-quality.jpg')] bg-cover bg-center  bg-no-repeat sm:h-[300px] sm:w-[600px] sm:bg-[url('/src/images/tablet/image-quality.jpg')] lg:order-last lg:m-0  lg:mr-8 lg:h-[500px] lg:basis-1/2 lg:p-8"></div>
        <div className="lg:mt-10 lg:basis-1/2 lg:p-8">
          <h3 className=" text-center text-h3 font-bold leading-h3 text-light-cream">
            Uncompromising quality
          </h3>
          <p className="mt-8 pl-5 pr-5 text-center font-barlow text-body leading-body text-grey-grey">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
      <div>
        <h4 className="mb-12 mt-32 text-center text-h4 font-bold leading-h4 text-grey-grey lg:ml-10 lg:text-left">
          Our Headquarters
        </h4>
      </div>
      <div className="grid grid-rows-3 lg:m-10 lg:flex">
        <div>
          <img
            src="/src/images/desktop/svg/illustration-uk.svg"
            alt=""
            className="m-auto lg:m-0"
          />
          <h3 className="mb-5 mt-10 text-center text-h3 font-bold leading-h3 lg:text-left">
            United Kingdom
          </h3>
          <p className="mb-16 pl-24 pr-24 text-center font-barlow text-body leading-body text-grey-grey lg:pl-0 lg:pr-52 lg:text-left">
            68 Asfordby Rd Alcaston SY6 1YA +44 1241 918425
          </p>
        </div>
        <div>
          <img
            src="/src/images/desktop/svg/illustration-canada.svg"
            alt=""
            className="m-auto lg:m-0"
          />
          <h3 className="mb-5 mt-10 text-center text-h3 font-bold leading-h3 lg:text-left">
            Canada
          </h3>
          <p className="mb-16 pl-20 pr-20 text-center font-barlow text-body leading-body text-grey-grey lg:pl-0 lg:pr-48 lg:text-left">
            1528 Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997
          </p>
        </div>
        <div>
          <img
            src="/src/images/desktop/svg/illustration-australia.svg"
            alt=""
            className="m-auto lg:m-0"
          />
          <h3 className="mb-5 mt-10 text-center text-h3 font-bold leading-h3 lg:text-left">
            Australia
          </h3>
          <p className="pl-20 pr-20 text-center font-barlow text-body leading-body text-grey-grey lg:pl-0  lg:text-left">
            36 Swanston Street Kewell Victoria <br /> +61 4 9928 3629
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
