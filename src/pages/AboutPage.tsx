import React, { useState } from "react";
import Title from "../Components/Title/Title";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Videoplayer from "../Components/Videoplayer/Videoplayer";

const AboutPage: React.FC = () => {
  const [playState, setPlayState] = useState<boolean>(false);
  return (
    <>
     <div className="container">
      <Title subTitle="About Us" title="Our University" />

      <About setPlayState={setPlayState} />
 <Footer/>
    </div>

    <Videoplayer playState={playState} setPlayState={setPlayState} />
    </>
   
    
  );
};

export default AboutPage;