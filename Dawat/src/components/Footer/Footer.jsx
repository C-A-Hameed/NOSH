import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <strong><h1 className="logo">DAWAT.</h1></strong>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti suscipit similique sunt? Recusandae, facere laudantium! Labore reiciendis expedita quibusdam sit sunt, culpa placeat modi, vel, soluta rem ipsa doloremque.</p>
        <div className="footer-social-icons">
            <FacebookIcon className="icons"/>
            <XIcon className="icons"/>
            <LinkedInIcon className="icons"/>
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+919892082186</li>
                <li>m.a.hameed10399@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ©️ Dawat.com -All Rights Reserved</p>
    </div>
  );
};

export default Footer;
