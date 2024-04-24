import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Props } from "./Model/Model";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiFillTwitterCircle } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import {FaSquareXTwitter, FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";

import "./NavBarStyles.css";

import twitterImg from "../../images/NavBar/twitter.png";
import linkedinImg from "../../images/NavBar/linkedin.png";
import githubImg from "../../images/NavBar/github.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { SiZebpay } from "react-icons/si";

const NavBar = ({gotoHrefFunc, activeComp, children }: Props): JSX.Element => {
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

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();


  const loadedComponent: JSX.Element = (
    <div className="nav-container">
      <ScrollToTop />
      <header>
        <Navbar
          expanded={expand}
          fixed="top"
          expand="lg"
          className={navColour ? "sticky" : "navbar"}
          bg="primary"
          data-bs-theme="dark"
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
                    to=""
                    onClick={() => gotoHrefFunc("home-about-href")}
                  >
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> About Me
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to=""
                    onClick={() => gotoHrefFunc("projects-href")}
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
                    to=""
                    onClick={() => gotoHrefFunc("cv-href")}
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
            <h3 className="navbar-footer-copy">
              &#169; Kjartan Már Andersen {new Date().getFullYear()}
            </h3>
            <div className="navbar-footer-sociallinks">
              <a
                className="navbar-footer-sociallink"
                href="https://twitter.com/KjartanAndersen"
              >
                <FaSquareXTwitter
                  size={size.width < 500 ? "1.2rem" : "1.2rem"}
                />
              </a>
              <a
                className="navbar-footer-sociallink"
                href="https://github.com/kjartanandersen"
              >
                <FaSquareGithub size={size.width < 500 ? "1.2rem" : "1.2rem"} />
              </a>
              <a
                className="navbar-footer-sociallink"
                href="https://is.linkedin.com/in/kjartan-m%C3%A1r-andersen-894abb1a6"
              >
                <FaLinkedinIn size={size.width < 500 ? "1.2rem" : "1.2rem"} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  window.addEventListener("scroll", scrollHandler);

  return <React.Fragment>{loadedComponent}</React.Fragment>;
};

export default NavBar;
