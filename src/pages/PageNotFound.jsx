import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ minHeight: "500px" }} className="container">
      <div className="row justify-content-center">
        <div
          className="col-8 d-flex flex-column gap-4 justify-content-center  align-items-center"
          style={{ minHeight: "200px" }}
        >
          <h1>"Oops! Page Not Found"</h1>
          <Link to="/" className="btn btn-info ">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
