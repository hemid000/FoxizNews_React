import React from "react";
import "../Location/MapUs.scss";
const MapUs = () => {
  return (
    <section id="map">
      <div className="container text-center">
        <p>Get In Touch</p>
        <h2>Contact US</h2>
      </div>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Foxiz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure acres/hectares on map
          </a>
        </iframe>
      </div>
    </section>
  );
};

export default MapUs;
