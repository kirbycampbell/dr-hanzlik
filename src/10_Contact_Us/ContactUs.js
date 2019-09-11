import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import SecondaryPages from "../04_Secondary_Pages/SecondaryPages";
import "./ContactUs.css";

const ContactUs = props => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleFormSubmit = event => {
    event.preventDefault();
    if (
      event.target.name.value === "" ||
      event.target.email.value === "" ||
      event.target.subject.value === "" ||
      event.target.message.value === ""
    ) {
      setSuccess(false);
      setError("*Fill in All Required Fields*");
    } else {
      setEmailForm({
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value
      });
    }
  };

  useEffect(() => {
    if (emailForm.name !== "") {
      const emailTheForm = async () => {
        if (emailForm.email.length > 4) {
          emailjs
            .send(
              "mailgun",
              "template_H3lBrtEI",
              {
                email: emailForm.email,
                to: "johnkirbycampbell@gmail.com",
                name: emailForm.name,
                subject: emailForm.subject,
                message: emailForm.message
              },
              "user_ardNX55ne6jBIZWq5zysc"
            )
            .then(
              response => {
                console.log("SUCCESS!", response.status, response.text);
                setSuccess(true);
              },
              err => {
                console.log("FAILED...", err);
                setError(
                  "Something Went wrong sending the message - try again later."
                );
              }
            );
        }
      };
      emailTheForm();
    }
  }, [emailForm]);

  return (
    <React.Fragment>
      <SecondaryPages
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <div className="Contact-Form">
        <div className="Inner-ContForm">
          <div className="contact-title">Contact Us</div>
          <div className="contact-desc">
            Got a question? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </div>
          <form className="form-section" onSubmit={handleFormSubmit}>
            <label>Your Name*</label>
            <input name="name" type="text" className="form-item" />
            <label>Email Address*</label>
            <input type="email" className="form-item" name="email" />
            <label>Message Subject*</label>
            <input type="text" className="form-item" name="subject" />
            <label>Message*</label>
            <textarea
              type="textarea"
              className="form-textarea"
              name="message"
            />
            {!success && (
              <input
                className="Submit-Btn"
                name="submit"
                type="submit"
                value="Submit Message"
              />
            )}
            {success && (
              <input
                className="Submit-Btn"
                name="submit"
                type="submit"
                value="Successfully Sent Message!"
                disabled={true}
              />
            )}
            {success && (
              <div className="SuccessfulMess">
                You Have successfully sent your message!
                <br />
                Thank you!
              </div>
            )}
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
