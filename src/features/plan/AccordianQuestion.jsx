import Products from "./Products";
import Products2 from "./Products2";

function AccordianQuestion() {
  return (
    <div className="item relative mb-28 mt-32 flex flex-col items-center rounded-xl">
      <Products title1="How do you drink your coffee?" />
      <Products2 title2="What type of coffee?" />
    </div>
  );
}

export default AccordianQuestion;
