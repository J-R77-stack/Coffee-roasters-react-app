function OurCollection() {
  return (
    <div className="mt-28 text-center sm:pb-28">
      <h2 className=" mb-8 inline-block bg-gradient-to-b from-grey-grey to-light-cream bg-clip-text text-h2 font-bold text-transparent sm:absolute sm:flex sm:text-h1 md:text-[120px] lg:text-[160px] xl:text-[220px]">
        our collection
      </h2>
      <div className=" sm:relative sm:grid sm:grid-cols-2 sm:pl-10 sm:pr-10 sm:pt-28 lg:grid lg:grid-cols-4 lg:grid-rows-1  lg:pr-0 lg:pt-40 xl:pt-56">
        <img src="/src/images/desktop/image-gran-espresso.png" alt="" />

        <div className="sm:text-left">
          <h4 className="mb-4 mt-8 text-h4 font-bold leading-h4 ">
            Gran Espresso
          </h4>
          <p className="mb-10  font-barlow text-body leading-body text-grey-grey">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>

        <img src="/src/images/desktop/image-planalto.png" alt="" />

        <div className="sm:text-left">
          <h4 className="mb-4 mt-8 text-h4 font-bold leading-h4">Planalto</h4>
          <p className="mb-10 font-barlow text-body leading-body text-grey-grey">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>

        <img src="/src/images/desktop/image-piccollo.png" alt="" />

        <div className="sm:text-left">
          <h4 className="mb-4 mt-8 text-h4 font-bold leading-h4">Piccollo</h4>
          <p className="mb-10 font-barlow text-body leading-body text-grey-grey">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>

        <img src="/src/images/desktop/image-danche.png" alt="" />

        <div className="sm:text-left">
          <h4 className="mb-4 mt-8 text-h4 font-bold leading-h4">Danche</h4>
          <p className="mb-10 font-barlow text-body leading-body text-grey-grey">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurCollection;
