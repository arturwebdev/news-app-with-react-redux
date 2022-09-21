import React from "react";
import { Link } from "react-router-dom";
import ArrowUp from "../../Components/ArrowUp/ArrowUp";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="row">
          <h4>About Our Site</h4>
          <p>
            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud
            qui in dolore commodo eu magna Duis cillum dolor officia esse mollit
            proident Excepteur exercitation nulla. Lorem ipsum In reprehenderit
            commodo aliqua irure labore.
          </p>

          <div className="col-two tab-1-3 mob-1-2 site-links">
            <h4>Site Links</h4>

            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-two tab-1-3 mob-1-2 social-links">
            <h4>Social</h4>

            <ul>
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">Dribbble</Link>
              </li>
              <li>
                <Link to="#">Google+</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
            </ul>
          </div>

          <div className="col-four tab-1-3 mob-full footer-subscribe">
            <h4>Subscribe</h4>

            <p>Keep yourself updated. Subscribe to our newsletter.</p>

            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate={true}>
                <input
                  type="email"
                  name="dEmail"
                  className="email"
                  id="mc-email"
                  placeholder="Type &amp; press enter"
                  required=""
                />

                <input type="submit" name="subscribe" />

                <label htmlFor="mc-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright 2022</span>
            </div>

            <ArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
}
