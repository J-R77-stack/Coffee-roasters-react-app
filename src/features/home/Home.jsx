import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import OurCollection from "./OurCollection";
import WhyChooseUs from "./WhyChooseUs";

function Home() {
  return (
    <div>
      <Hero />,
      <OurCollection />,
      <WhyChooseUs />,
      <HowItWorks />
    </div>
  );
}

export default Home;
