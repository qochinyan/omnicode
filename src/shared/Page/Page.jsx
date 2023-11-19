import React from "react";
import "./page.scss";
import image1 from "../../assets/mainEllipse1.png";
import image2 from "../../assets/mainEllipse2.png";

export default function page({ children }) {
  return (
    <div className="page-container">
      {children}
      <img className="page-image-1" src={image1} />
      <img className="page-image-2" src={image2} />
    </div>
  );
}
