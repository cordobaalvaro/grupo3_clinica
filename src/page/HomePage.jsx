import React from "react";
import CarouselComponent from "../components/ui/CarouselComponent";
import { imagenesCarouselFormulario } from "../database/imagenesServidor";
import ContactPage from "../components/layout/contactComponent/ContactComponent";

const HomePage = () => {
  return (
    <>
      <CarouselComponent
        idCarousel='carouselhome'
        carouselReutilizable={imagenesCarouselFormulario}
      />
      <ContactPage />
    </>
  );
};

export default HomePage;
