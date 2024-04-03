import Accordian from "./Accordian";

function Questions() {
  return (
    <div className="item relative mb-28 mt-32 flex flex-col items-center rounded-xl">
      <Accordian
        title="How do you drink your coffee?"
        option1="Capsule"
        info1=" Compatible with Nespresso systems and similar brewers"
        option2="Filter"
        info2=" For pour over or drip methods like Aeropress, Chemex, and V60"
        option3="Expresso"
        info3=" Dense and finely ground beans for an intense, flavorful experience"
      />
      <Accordian
        title="What type of coffee?"
        option1="Single origin"
        info1=" Distinct, high quality coffee from a specific family-owned farm"
        option2="Decaf"
        info2="Just like regular coffee, except the caffeine has been removed "
        option3="Blended"
        info3="Combination of two or three dark roasted beans of organic coffees"
      />
      <Accordian
        title="How much would you like?"
        option1="250g"
        info1="Perfect for the solo drinker. Yields about 12 delicious cups. "
        option2="500g"
        info2="Perfect option for a couple. Yields about 40 delectable cups."
        option3="1000g"
        info3="Perfect for offices and events. Yields about 90 delightful cups."
      />
      <Accordian
        title="Want us to grind them?"
        option1="Wholebean"
        info1="Best choice if you cherish the full sensory experience"
        option2="Filter"
        info2="For drip or pour-over coffee methods such as V60 or Aeropress"
        option3="Cafetiére"
        info3="Course ground beans specially suited for french press coffee"
      />
      <Accordian
        title="How often should we deliver?"
        option1="Every week"
        info1="$14.00 per shipment. Includes free first-class shipping"
        option2="Every 2 weeks"
        info2="$17.25 per shipment. Includes free priority shipping."
        option3="Every month"
        info3="$22.50 per shipment. Includes free priority shipping. "
      />
    </div>
  );
}

export default Questions;
