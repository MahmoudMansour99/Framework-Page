import React from "react";
import LightStarLine from "../LightStarLine/LightStarLine";

export default function About() {
  return (
    <>
      <div className="homeBody d-flex justify-content-center flex-column align-items-center bg-success vh-100 text-white">
        <h1 className="mt-5">ABOUT COMPONENT</h1>
        <LightStarLine />
        <div className="container px-5 mt-4">
          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
