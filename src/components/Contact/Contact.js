import React from "react";
import Map from "../Map/Map";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-details">
        <div className="contact-mobile">
          <span class="material-symbols-outlined contact-icon">
            phone_in_talk
          </span>
          <p className="contact-info">066/5203-254</p>
        </div>
        <div className="contact-location">
          <span class="material-symbols-outlined contact-icon">
            location_on
          </span>
          <p className="contact-info">Novi Sad, Serbia</p>
        </div>
        <div className="contact-email">
          <span class="material-symbols-outlined contact-icon">mail</span>
          <p className="contact-info">paeoniabeauty@gmail.com</p>
        </div>
      </div>
      <div className="contact-send-message">
        <h1>Contact Us</h1>
        <form action="">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="..." required />
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder="..." required />
          <label htmlFor="">Phone</label>
          <input type="number" placeholder="..." required />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        <button type="submit" className="contact-button">
          Send
        </button>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
