import React from "react";
import "./ContactSubmit.css";

export default function ContactSubmit() {
  return (
    <div>
      <form name="cForm" id="cForm" method="post" action="">
        <fieldset>
          <div className="form-field">
            <input
              name="cName"
              type="text"
              id="cName"
              className="full-width"
              placeholder="Your Name"
            />
          </div>

          <div className="form-field">
            <input
              name="cEmail"
              type="text"
              id="cEmail"
              className="full-width"
              placeholder="Your Email"
            />
          </div>

          <div className="form-field">
            <input
              name="cWebsite"
              type="text"
              id="cWebsite"
              className="full-width"
              placeholder="Website"
            />
          </div>

          <div className="message form-field">
            <textarea
              name="cMessage"
              id="cMessage"
              className="full-width"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit button-primary full-width-on-mobile"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
