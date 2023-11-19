import React from "react";
import "./page.scss";

export default function page({ children }) {
  return <div className="page-container">{children}</div>;
}
