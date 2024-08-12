import Navbar from "./Main/navbar";
import Hero from "./Main/hero";
import Exams from "./Main/exams";
import Reviews from './Main/reviews';
import Footer from "./Main/footer";

export default function Main() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Exams/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

