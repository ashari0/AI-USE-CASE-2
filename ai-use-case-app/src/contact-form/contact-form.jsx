import React, { useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import { setUserInfo } from "../utils/actions";
import "./contact-form.css";

function ContactForm() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!formState.firstName) formErrors.firstName = "First name is required";
    if (!formState.lastName) formErrors.lastName = "Last name is required";
    if (!validator.isEmail(formState.email))
      formErrors.email = "Email is not valid";
    if (formState.message.length < 10)
      formErrors.message = "Message must be at least 10 characters long";
    if (!formState.message) formErrors.message = "Message is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (Object.keys(formErrors).length === 0) {
      alert("Record submitted successfully!");
    }

    dispatch(setUserInfo(formState));
  };

  return (
    <div className="container" data-testid="contact-form">
      <div className="text">Contact us Form</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label htmlFor="firstName">First Name</label>
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
          </div>
          <div className="input-data">
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label htmlFor="lastName">Last Name</label>
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              id="email"
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <div className="underline"></div>
            <label htmlFor="email">Email Address</label>
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea
              id="message"
              rows="8"
              cols="80"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="message">Write your message</label>
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
