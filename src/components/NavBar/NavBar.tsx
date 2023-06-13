import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Props } from "./Model/Model";
import AnimatedCursor from "react-animated-cursor";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiFillTwitterCircle } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

import "./NavBarStyles.css";

import twitterImg from "../../images/NavBar/twitter.png";
import linkedinImg from "../../images/NavBar/linkedin.png";
import githubImg from "../../images/NavBar/github.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const NavBar = ({ activeComp, children }: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [expand, updateExpanded] = useState<any>(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }


  const loadingComponent: JSX.Element = <div>Loading...</div>;

  const loadedComponent: JSX.Element = (
    <div className="nav-container">
      <ScrollToTop />
      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <header>
        <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          className={navColour ? "sticky" : "navbar"}
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/projects"
                    onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/cv"
                    onClick={() => updateExpanded(false)}
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* <div className="navbar">
            <div>
              <ul className="navbar-nav">
                <li>
                  <div className="navbar-item">
                    <Link
                      to="/"
                      className={`nav-link ${
                        activeComp === "home" ? "nav-active-home" : ""
                      }`}
                    >
                      About
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="navbar-item">
                    <Link
                      to="/cv"
                      className={`nav-link ${
                        activeComp === "cv" ? "nav-active-cv" : ""
                      }`}
                    >
                      My Resume
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="navbar-item">
                    <Link
                      to="/projects"
                      className={`nav-link ${
                        activeComp === "projects" ? "nav-active-projects" : ""
                      }`}
                    >
                      Projects
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
      </header>
      <main>{children}</main>
      <footer>
        <div className="navbar-footer">
          <div className="navbar-footer-copy-and-links">
            <p className="navbar-footer-copy">
              &#169; Kjartan Már Andersen {new Date().getFullYear()}
            </p>
            <div className="navbar-footer-sociallinks">
              <a className="navbar-footer-sociallink" href="https://twitter.com/KjartanAndersen">
                <BsTwitter />
              </a>
              <a className="navbar-footer-sociallink" href="https://github.com/kjartanandersen">
                <BsGithub />
              </a>
              <a className="navbar-footer-sociallink" href="https://is.linkedin.com/in/kjartan-m%C3%A1r-andersen-894abb1a6">
                <BsLinkedin />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );

  window.addEventListener("scroll", scrollHandler);

  return (
    <React.Fragment>
      {loadedComponent}
    </React.Fragment>
  );
};

export default NavBar;
