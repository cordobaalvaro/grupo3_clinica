import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <>
      <div className='map-responsive'>
        <iframe
          className=' rounded shadow'
          width='90%'
          height='600'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679493917!2d-65.20974192364194!3d-26.836578490028632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1741995912353!5m2!1ses!2sar'
        ></iframe>
      </div>
    </>
  );
};

export default Map;
