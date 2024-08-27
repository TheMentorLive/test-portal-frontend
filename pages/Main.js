import Head from "next/head";
import Navbar from "./Main/navbar";
import Hero from "./Main/hero";
import Exams from "./Main/exams";
import Reviews from "./Main/reviews";
import Footer from "./Main/footer";
// import SparklesPreview from "./Main/te";

export default function Main() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Head>
        <title>GenAI Learning</title>
       
      </Head>
      
      <Navbar />
      <Hero />
      
      <Exams />
      <Reviews />
      {/* <SparklesPreview/> */}
      <Footer />
    </div>
  );
}
