import React from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPanel.css";

const FUNNY_PASS = "mypass123";
const FUNNY_NAME = "kjartanmar";

type LoginPanelProps = {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

const LoginPanel: React.FC<LoginPanelProps> = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
}) => {
  const navigate = useNavigate();

  // Fake login: only the "valid" credentials move you to /approved; anything
  // else simply does nothing (the form never actually submits).
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (FUNNY_NAME === username && FUNNY_PASS === password) {
      navigate("/approved");
    }
  };

  return (
    <div className="loginWrap">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="loginPanel">
          <svg
            className="arcs"
            viewBox="0 0 1000 537"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle cx="771" cy="-13" r="380" />
            <circle cx="771" cy="-13" r="596" />
            <circle cx="771" cy="-13" r="820" />
          </svg>

          <h1 className="title">User authorisation required</h1>

          <div className="fields">
            <label className="label" htmlFor="login-name">
              Name
            </label>
            <input
              className="field"
              id="login-name"
              type="text"
              value={username}
              onChange={(event) => onUsernameChange(event.target.value)}
            />

            <label className="label" htmlFor="login-code">
              Code
            </label>
            <input
              className="field txtPassword"
              id="login-code"
              type="text"
              value={password}
              onChange={(event) => onPasswordChange(event.target.value)}
            />
          </div>
        </div>
        <div className="submitArea">
          <button className="submitBtn" type="submit">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPanel;
