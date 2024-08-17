// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <div className="footer-items">
            <h3>About Us</h3>
            <p>
              CCTV cameras are electronic devices used for surveillance and
              security purposes. They capture video footage in real-time, which
              can be monitored either locally or remotely. These cameras are
              widely used in public areas, businesses, and private properties to
              deter crime and ensure safety.
            </p>
          </div>

          <div className="footer-items">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/movie">Movie</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: manohar.visave@gmail.com</li>
              <li>Phone: +91 98341 51842</li>
              <li>
                Address: Shree Apt. Ashoka Marg, Nashik, Maharastra, India
              </li>
            </ul>
          </div>

          <div className="footer-items">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-1x"></i>
                  <b>LinkedIn</b>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ChyrenEng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-1x"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://web.telegram.org/k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram fa-1x"></i> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-1x"></i> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="p-3 bg-dark text-white text-center">
        All Right Receved @Visave Groups in Nashik
      </p>
    </>
  );
};

export default Footer;
