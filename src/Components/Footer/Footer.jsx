import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-white text-center py-5">
        <div className="container py-5">
          <div className="row g-3">
            <div className="col-md-4">
              <div>
                <h1 className="fs-3">LOCATION</h1>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1 className="fs-3">ABOUT THE WEB</h1>
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-globe"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1 className="fs-3">ABOUT FREELANCER</h1>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center pt-4 pb-2 bg-black text-white">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
