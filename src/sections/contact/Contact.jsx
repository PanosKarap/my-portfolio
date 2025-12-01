import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjdk47c",
        "template_aesug4c",
        e.target,
        "AND7ep3GxUmqSCDBJ"
      )
      .then(
        (result) => {
          alert("Thank you! Your message has been sent.");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h1>Contact me</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="first-last-name-container">
          <div className="first-name-container">
            <label className="label" htmlFor="fname">
              First name *
            </label>
            <input
              className="input"
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="last-name-container">
            <label className="label" htmlFor="lname">
              Last name *
            </label>
            <input
              className="input"
              type="text"
              id="lname"
              name="lname"
              required
            />
          </div>
        </div>

        <div className="email-container">
          <label className="label" htmlFor="email">
            Email *
          </label>
          <input
            className="input email-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="message-container">
          <label className="label" htmlFor="message">
            Message *
          </label>
          <textarea
            className="input message-input"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
