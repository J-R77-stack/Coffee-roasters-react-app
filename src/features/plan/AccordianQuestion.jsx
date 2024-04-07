import Products from "./Products";

function AccordianQuestion() {
  return (
    <div className="item relative mb-28 mt-32 flex flex-col items-center rounded-xl">
      <Products title="How do you drink your coffee?" />
      <Products title="What type of coffee?" />
      <Products title="How much would you like?" />
      <Products title="Want us to grind them?" />
      <Products title="How often should we deliver?" />
    </div>
  );
}

export default AccordianQuestion;
