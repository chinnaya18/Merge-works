import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="min-vh-100 text-light"
      style={{
        backgroundColor: "#0d1117",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating background animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "100px",
            height: "100px",
            top: "20%",
            left: "15%",
            background: "rgba(188, 212, 242, 0.15)",
            animation: "float 12s infinite ease-in-out",
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "150px",
            height: "150px",
            top: "60%",
            left: "70%",
            background: "rgba(188, 212, 242, 0.15)",
            animation: "float 12s infinite ease-in-out 2s",
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "80px",
            height: "80px",
            top: "40%",
            left: "50%",
            background: "rgba(188, 212, 242, 0.15)",
            animation: "float 12s infinite ease-in-out 4s",
          }}
        />
      </div>

      {/* Header */}
      <header
        className="d-flex justify-content-end align-items-center py-3 px-4"
        style={{ backgroundColor: "#161b22", zIndex: 1 }}
      >
        <p className="mb-0">
          Already have an account?{" "}
          <a href="signin.html" className="text-decoration-none text-primary fw-bold">
            Sign in
          </a>
        </p>
      </header>

      {/* Main container */}
      <main
        className="container-fluid d-flex flex-wrap justify-content-center align-items-stretch py-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Left Section */}
        <section
          className="d-flex flex-column justify-content-center text-center text-white p-5 rounded m-3"
          style={{
            background: "radial-gradient(circle at top, #1f6feb, #0d1117)",
            flex: 1,
            minWidth: "320px",
          }}
        >
          <h1>Create your free account</h1>
          <p className="text-light-emphasis">
            Explore powerful tools and features for individuals and teams.
          </p>
          <button
            className="btn btn-outline-light"
            onClick={() => setShowDetails(!showDetails)}
          >
            See what's included {showDetails ? "▲" : "▼"}
          </button>
          {showDetails && (
            <div className="text-start mt-3">
              <ul>
                <li>Access to unlimited repositories</li>
                <li>Collaborate with your team easily</li>
                <li>Manage projects and code securely</li>
              </ul>
            </div>
          )}
        </section>

        {/* Right Section */}
        <section
          className="d-flex justify-content-center align-items-center bg-dark rounded m-3 p-4"
          style={{ flex: 1, minWidth: "320px" }}
        >
          <form
            className="p-4 rounded shadow"
            style={{
              backgroundColor: "#0d1117",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "0 0 15px rgba(88,166,255,0.2)",
            }}
          >
            <h2 className="text-center text-white mb-4">Sign Up</h2>

            <button type="button" className="btn btn-outline-secondary w-100 mb-2">
              Continue with Google
            </button>
            <button type="button" className="btn btn-outline-secondary w-100 mb-3">
              Continue with Apple
            </button>

            <div className="text-center text-secondary mb-3">
              <hr style={{ borderColor: "#30363d" }} />
              <span>or</span>
              <hr style={{ borderColor: "#30363d" }} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control bg-dark text-light" placeholder="Email" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input type="password" className="form-control bg-dark text-light" placeholder="Password" required />
              <small className="text-secondary">
                Password should be at least 8 characters including a number and a lowercase letter.
              </small>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="Username" required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Country / Region</label>
              <select className="form-select bg-dark text-light">
                <option value="">Select</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="updates" />
              <label htmlFor="updates" className="form-check-label">
                Receive occasional product updates
              </label>
            </div>

            <a href="secondpage.html" className="btn btn-success w-100 fw-bold mb-3">
              Create Account
            </a>

            <p className="text-secondary small text-center">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-decoration-none text-primary">Terms of Service</a> and{" "}
              <a href="#" className="text-decoration-none text-primary">Privacy Policy</a>.
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3"
        style={{ backgroundColor: "#161b22", color: "#8b949e", zIndex: 1 }}
      >
        © 2025 MergeWorks. All rights reserved.
      </footer>

      {/* Floating animation CSS */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(-40px) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SignupPage;
