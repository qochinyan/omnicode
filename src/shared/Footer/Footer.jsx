import React from "react";
import "./Footer.scss";
import { Nav, Navbar } from "react-bootstrap";
import insta from "../../assets/insta.png";

export default function Footer() {
  return (
    <Navbar>
      <div className="footer-container">
        <div className="footer-left">
          <Nav.Link
            style={{ fontSize: "24px" }}
            className="navlink logolink"
            href="/"
          >
            Experts.ai
          </Nav.Link>
          <div className="links">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              src={insta}
              alt=""
            />
            <img
              src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-a7sf08js.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer-right">
          <Nav className="nav-right">
            <Nav.Link className="navlink" href="#">
              Pricing
            </Nav.Link>
            <Nav.Link className="navlink" href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="navlink" href="#">
              help
            </Nav.Link>
          </Nav>
          <p style={{ opacity: ".8", color: "white" }}>
            Terms of Use & Privacy Policy
          </p>
      <div className="line"></div>
      <div className="c">© 2022  Experts | All rights reserved.</div>
        </div>
      </div>

    </Navbar>
  );
}
