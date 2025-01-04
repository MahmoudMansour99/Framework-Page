import React from "react";

import Styles from "./darkstarline.module.css";

export default function DarkStarLine() {
  return (
    <span className={Styles.lineIcon}>
      <i className="fa fa-star"></i>
    </span>
  );
}
