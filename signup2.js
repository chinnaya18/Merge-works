import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WelcomePage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="text-light min-vh-100 d-flex flex-column"
      style={{
        backgroundColor: "#0d1117",
        fontFamily: '"Segoe UI", Arial, sans-serif',
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Floating Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "150px",
            height: "150px",
            top: "10%",
            left: "20%",
            borderRadius: "50%",
            background: "rgba(188, 212, 242, 0.12)",
            animation: "float 12s infinite ease-in-out",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "70%",
            left: "80%",
            borderRadius: "50%",
            background: "rgba(188, 212, 242, 0.12)",
            animation: "float 12s infinite ease-in-out 3s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            top: "50%",
            left: "40%",
            borderRadius: "50%",
            background: "rgba(188, 212, 242, 0.12)",
            animation: "float 12s infinite ease-in-out 6s",
          }}
        ></div>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0) scale(1); opacity: 0.6; }
              50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
              100% { transform: translateY(0) scale(1); opacity: 0.6; }
            }
          `}
        </style>
      </div>

      {/* Header */}
      <header
        className="py-3 px-4 bg-dark d-flex justify-content-end"
        style={{ position: "relative", zIndex: 1 }}
      >
        <a href="#" className="text-primary text-decoration-none fw-semibold">
          Need Help?
        </a>
      </header>

      {/* Main Content */}
      <div
        className="container-fluid flex-grow-1 d-flex align-items-center justify-content-center py-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="row align-items-center justify-content-center w-100">
          {/* Left Section */}
          <div className="col-md-6 text-md-start text-center px-4 mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-white">Welcome</h1>
            <p className="text-secondary fs-5 mb-4">
              Your account was created successfully. Start exploring your
              projects and repositories.
            </p>

            <button
              className="btn btn-outline-secondary text-light"
              style={{ borderColor: "#30363d" }}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide details ▲" : "See what's included ▼"}
            </button>

            {showDetails && (
              <div className="mt-3 text-start text-secondary">
                <ul>
                  <li>Private and public repositories</li>
                  <li>Project boards and task tracking</li>
                  <li>Collaborator access controls</li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="col-md-5 px-4">
            <div
              className="card text-center shadow-lg border-0 p-4 mx-auto"
              style={{
                backgroundColor: "#161b22",
                maxWidth: "380px",
              }}
            >
              <h2 className="text-white mb-3">Account Created</h2>
              <p className="text-secondary mb-4">
                You can go back to the start or sign in using Google or Apple.
              </p>

              <button
                className="btn w-100 mb-3 fw-semibold"
                style={{ backgroundColor: "#238636", color: "white" }}
              >
                Continue with Google
              </button>

              <button
                className="btn w-100 mb-3 fw-semibold"
                style={{ backgroundColor: "#30363d", color: "#f0f6fc" }}
              >
                Continue with Apple
              </button>

              <a
                href="signin.html"
                className="btn w-100 fw-semibold text-decoration-none"
                style={{ backgroundColor: "#238636", color: "white" }}
              >
                Sign In →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="bg-dark text-center text-secondary py-3 mt-auto"
        style={{ position: "relative", zIndex: 1 }}
      >
        © 2025 MergeWorks. All rights reserved.
      </footer>
    </div>
  );
}

export default WelcomePage;
