import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <Link to="/" className="footer-logo">
          Paeonia Beauty
        </Link>
        <p>Developed By Dermatologists</p>
      </div>
      <div className="footer-contact-section">
        <h2>Contact Us</h2>
        <div className="footer-contact">
          <span class="material-symbols-outlined footer-icon">
            phone_in_talk
          </span>
          <p className="footer-info">066/5203-254</p>
        </div>
        <div className="footer-contact">
          <span class="material-symbols-outlined footer-icon">location_on</span>
          <p className="footer-info">Novi Sad, Serbia</p>
        </div>
        <div className="footer-contact">
          <span class="material-symbols-outlined footer-icon">mail</span>
          <p className="footer-info">paeoniabeauty@gmail.com</p>
        </div>
      </div>
      <div className="footer-network">
        <h2>Network</h2>
        <FaFacebookSquare className="network-icons" />
        <FaYoutube className="network-icons" />
        <FaInstagram className="network-icons" />
        <FaTwitter className="network-icons" />
        <FaTiktok className="network-icons" />
      </div>
      <div className="footer-rights">
        <p>
          Copyright © <span>{year}</span>
        </p>
        <p> Developed By:Marijana Hornjak</p>
      </div>
    </footer>
  );
};

export default Footer;
