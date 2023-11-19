import React from "react";
import "./Header.scss";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar>
      <div className="header-container">
        <Navbar.Brand>
          <Nav.Link className="navlink logolink" href="/">
            Experts.ai
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="nav-right">
          <Nav.Link className="navlink" href="/blog">
            blog
          </Nav.Link>
          <Nav.Link className="navlink" href="/experts">
            AI Experts
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}
