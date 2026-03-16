import React from "react";
import Title from "../Components/Title/Title";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const ContactPage: React.FC = () => {
  return (
    <>
     <div className="container">
      <Title subTitle="Contact Us" title="Get in Touch" />

      <Contact />
       <Footer/>
    </div>

   
    </>
   
  );
};

export default ContactPage;