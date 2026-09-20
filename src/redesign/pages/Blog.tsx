import React from "react";
import { Link } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";

import "./ContentPage.css";

const Blog: React.FC = () => {
  return (
    <ApprovedPageBase pullUp={false}>
      <div className="contentPage">
        <div className="pageHeader">
          <h1>Blog</h1>
          <Link to="/approved" className="backLink">
            &lt; Back
          </Link>
        </div>

        <p className="placeholder">
          Transmission pending... No entries have been logged yet. Check back
          soon.
        </p>
      </div>
    </ApprovedPageBase>
  );
};

export default Blog;
