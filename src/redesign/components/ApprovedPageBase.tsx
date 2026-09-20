import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import closeImg from "../../assets/images/approved/close.jpg";
import speed0Img from "../../assets/images/approved/speed0.jpg";
import speed1Img from "../../assets/images/approved/speed1.jpg";
import speed2Img from "../../assets/images/approved/speed2.jpg";
import speed3Img from "../../assets/images/approved/speed3.jpg";
import worldMapImg from "../../assets/images/approved/worldmapsmall.jpg";

import "./ApprovedPageBase.css";

function formatDate(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${get("hour")}.${get("minute")}.${get("second")} ${get("day")} ${get(
    "month"
  )} ${get("year")}`;
}

type ApprovedPageBaseProps = {
  children: React.ReactNode;
  /**
   * Pulls the content up under the chrome bar (the original landing-page look).
   * Content pages leave this off so their header clears the world map /
   * Disconnect button.
   */
  pullUp?: boolean;
};

const ApprovedPageBase: React.FC<ApprovedPageBaseProps> = ({
  children,
  pullUp = true,
}) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="topBorder">
        <div className="leftSideTop">
          <div className="closeFlex">
            <Link className="close" to="/">
              <img
                className="closeImg"
                alt="Close Button"
                aria-label="Image of a close button that does nothing"
                src={closeImg}
              />
            </Link>
          </div>
          <p className="dateTime">{formatDate(time)}</p>
          <p className="ipAddress">127.0.0.1</p>

          <div className="speedFlex">
            <img className="speedImg" alt="speed 1" src={speed0Img} />
            <img className="speedImg" alt="speed 2" src={speed1Img} />
            <img className="speedImg" alt="speed 3" src={speed2Img} />
            <img className="speedImg" alt="speed 4" src={speed3Img} />
          </div>

          <div className="cpuUsage">
            <p className="cpuText">CPU Usage</p>
            <p className="cpuText">0...........50.........100</p>
            <div className="inline">
              <p className="cpuText"> &lt; </p>
              <p className="cpuTrace">Trace Tracker</p>
              <p className="cpuText"> &gt; </p>
            </div>
          </div>
        </div>

        <div className="rightSideTop">
          <div className="worldMap">
            <img alt="world map" src={worldMapImg} />
            <Link to="/">Disconnect</Link>
          </div>
        </div>
      </div>
      <div className={pullUp ? "childComponent" : "childComponentFlush"}>
        {children}
      </div>

      <footer className="siteFooter">
        <span className="footerName">Kjartan Már Andersen</span>
        <div className="footerLinks">
          <a href="mailto:kjartan1@live.com">kjartan1@live.com</a>
          <a
            href="https://github.com/kjartanandersen"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kjartanmarandersen/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ApprovedPageBase;
