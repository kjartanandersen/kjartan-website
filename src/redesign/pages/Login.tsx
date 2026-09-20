import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import LoginPanel from "../components/LoginPanel";

import graphicsImg from "../../assets/images/index/graphicsoptions.jpg";
import newGameImg from "../../assets/images/index/newgame.jpg";
import exitGameImg from "../../assets/images/index/exitgame.jpg";

import "./Login.css";

const USERNAME_TEXT_TO_FILL = "kjartanmar";
const PASSWORD_TEXT_TO_FILL = "mypass123";

// Milliseconds per character of the auto-fill animation.
const TYPE_DELAY_MS = 30;

type TimerId = ReturnType<typeof setTimeout>;

const Login: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const typeTimers = useRef([] as TimerId[]);

  // Reveals `text` one character at a time, handing each partial value to `assign`.
  const typeText = (text: string, assign: (value: string) => void) => {
    let index = 0;

    const step = () => {
      index += 1;
      assign(text.slice(0, index));

      if (index < text.length) {
        typeTimers.current.push(setTimeout(step, TYPE_DELAY_MS));
      }
    };

    typeTimers.current.push(setTimeout(step, TYPE_DELAY_MS));
  };

  const handlePassOnClick = () => {
    // Clicking again mid-animation restarts it cleanly.
    typeTimers.current.forEach(clearTimeout);
    typeTimers.current = [];

    setUsername("");
    setPassword("");

    typeText(USERNAME_TEXT_TO_FILL, setUsername);
    typeText(PASSWORD_TEXT_TO_FILL, setPassword);
  };

  // Drop any pending timers if the page unmounts mid-animation.
  useEffect(() => {
    return () => typeTimers.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="index">
      <Link to="/approved" className="hiddenBtn" tabIndex={0}>
        Proceed
      </Link>
      <h1 className="header">Kjartan Már Andersen</h1>
      <div className="page">
        <div>
          <h2>Valid User Names</h2>
          <button
            className={`pass ${isHovered ? "hovered" : ""}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            onClick={handlePassOnClick}
          >
            kjartanmar - mypass123
          </button>
        </div>

        <LoginPanel
          username={username}
          password={password}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
        />

        <div>
          <div className="rightSideList">
            <h2>New User</h2>
            <img className="speedImg" alt="New user" src={newGameImg} />
          </div>
          <div className="rightSideList">
            <h2>Retire</h2>
            <img className="speedImg" alt="Retire" src={exitGameImg} />
          </div>
          <div className="rightSideList">
            <h2>Options</h2>
            <img className="speedImg" alt="Options" src={graphicsImg} />
          </div>
          <div className="rightSideList">
            <h2>Exit</h2>
            <img className="speedImg" alt="Exit" src={exitGameImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
