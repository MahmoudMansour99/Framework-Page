import React from "react";
import Styles from "./contact.module.css";
import DarkStarLine from "../DarkStarLine/DarkStarLine";

export default function Contact() {
  return (
    <>
      <div className={Styles.contactSection}>
        <h1>CONTACT SECTION</h1>
        <DarkStarLine />

        <div className="mt-5 w-50 mx-auto">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">User Name:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingAge"
              placeholder="Age"
            />
            <label for="floatingAge">User Age:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
            <label for="floatingEmail">User Email:</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">User Password:</label>
          </div>
        </div>
        <button className="btn btn-success mt-3">Send Message</button>
      </div>
    </>
  );
}
