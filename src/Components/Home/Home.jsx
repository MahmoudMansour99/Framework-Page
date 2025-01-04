import React from "react";

import Avatar from "../../assets/avataaars.svg";
import LightStarLine from "../LightStarLine/LightStarLine";

export default function Home() {
  return (
    <>
      <div className="homeBody d-flex justify-content-center flex-column align-items-center bg-success vh-100 text-white">
        <div className="homeImg">
          <img src={Avatar} width={250} alt="Avatar" />
        </div>
        <div className="homeContent text-center">
          <h1 className="mt-5">START FRAMEWORK</h1>
          <LightStarLine />
          <p className="mt-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
