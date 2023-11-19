import React from "react";
import Page from "../../shared/page/page";

export default function Blog() {
  return (
    <div>
      <Page children={<div style={{height:"calc(100vh - 80px)",padding:"111px",color:"white",fontSize:"48px",fontWeight:600}}>Blog</div>} />
    </div>
  );
}
