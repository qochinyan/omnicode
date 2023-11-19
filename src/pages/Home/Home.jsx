import React from "react";
import Page from "../../shared/page/page";
import HomeSlice from "../../shared/HomeSlice/HomeSlice";
export default function Home() {
  return (
    <div className="home-container">
      <Page children={<HomeSlice />} />
    </div>
  );
}
