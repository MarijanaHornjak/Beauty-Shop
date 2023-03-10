import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section className="map">
      <h2>Location</h2>
      <iframe
        title="location"
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=bulevar oslobodjenja 56, novi sad, serbia&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </section>
  );
};

export default Map;
