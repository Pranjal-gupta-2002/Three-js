import React from "react";
import styled from "styled-components";
import './Footer.css'
const Footer = () => {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>About Us</h4>
          <p className="about" id="footer_text">We are committed to making your virtual internship experience a success. Our goal is to help you build a strong foundation for your future, and we are dedicated to providing the support and resources you need to achieve your goals.</p>
          
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#internship">Internship</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <a href="#internship"><h4>Internships</h4></a>
          <ul>
            <li><a href="#web">Web Development</a></li>
            <li><a href="#app">App Development</a></li>
            <li><a href="#graphic">Graphic Design</a></li>            
            <li><a href="#data">Data Science</a></li>
            <li><a href="#graphic">Java Development</a></li>
            <li><a href="#marketing">Social-Media-Marketing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/people/Simplbyte/100090440826505/"><i class="fab fa-facebook-f"></i></a>
            <a href="http://tiny.cc/Simplbyteme"><i class="fab fa-discord"></i></a>
            <a href="https://www.instagram.com/simplbyte/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/simplbyte/"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>Copyright © 2023 <b>Simpl<span style={{color:'#915EFF'}}>Byte</span>.tech Pvt.Ltd.</b> All rights reserved.</p>
      </div>
      

    </div>
 </footer>
  );
};

export default Footer;
