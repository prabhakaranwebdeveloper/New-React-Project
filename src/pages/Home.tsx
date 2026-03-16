import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import Programs from "../Components/Programs/Programs";
import Title from "../Components/Title/Title";
import About from "../Components/About/About";
import Campus from "../Components/Campus/Campus";
import Testimonial from "../Components/Testimonial/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Videoplayer from "../Components/Videoplayer/Videoplayer";

const Home: React.FC = () => {
  const [playState, setPlayState] = useState<boolean>(false);

  return (
    <>
      <Hero />

      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />

        <About setPlayState={setPlayState} />

        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />

        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonial />

        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />

        <Footer />
      </div>

      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Home;