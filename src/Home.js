import React from "react";
import { FaGithub, FaBell, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-secondary px-3 py-2 d-flex justify-content-between align-items-center">
      {/* Left section */}
      <div className="d-flex align-items-center gap-3">
        <FaGithub size={32} className="text-white" />

        <input
          type="text"
          placeholder="Type / to search"
          className="form-control form-control-sm bg-secondary text-light border-0"
          style={{ width: "220px" }}
        />
      </div>

      {/* Right section */}
      <div className="d-flex align-items-center gap-3">
        {/* New Button */}
        <button className="btn btn-success btn-sm d-flex align-items-center gap-2">
          <FaPlus /> <span>New</span>
        </button>

        {/* Notification Bell */}
        <button
          className="btn btn-outline-light btn-sm position-relative rounded-circle p-2 d-flex align-items-center justify-content-center"
          style={{ width: "36px", height: "36px" }}
        >
          <FaBell />
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ fontSize: "0.4rem" }}
          ></span>
        </button>

        {/* Profile Image */}
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=40&v=4"
          alt="profile"
          className="rounded-circle border border-secondary"
          width="32"
          height="32"
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

export default Home;
