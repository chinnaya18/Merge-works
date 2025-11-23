import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SignInPage() {
  useEffect(() => {
    // Create floating circles dynamically
    const bg = document.getElementById("background");
    if (bg && bg.children.length === 0) {
      for (let i = 0; i < 20; i++) {
        const circle = document.createElement("div");
        const size = Math.random() * 120 + 30;
        Object.assign(circle.style, {
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: "rgba(188, 212, 242, 0.15)",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float 12s infinite ease-in-out`,
          animationDelay: `${Math.random() * 10}s`,
        });
        circle.classList.add("circle");
        bg.appendChild(circle);
      }
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
        minHeight: "100vh",
        fontFamily: '"Segoe UI", Arial, sans-serif',
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 🌌 Background Animation */}
      <div
        id="background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
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

      {/* 🧭 Header */}
      <header
        className="d-flex justify-content-between align-items-center px-4 py-3 shadow-sm"
        style={{ backgroundColor: "#161b22", position: "relative", zIndex: 1 }}
      >
        <h3 className="text-light m-0 fw-bold">MergeWorks</h3>
        <nav>
          <a
            href="#"
            className="text-decoration-none text-light me-4"
            style={{ fontSize: "1rem" }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-decoration-none text-primary"
            style={{ fontSize: "1rem" }}
          >
            Help
          </a>
        </nav>
      </header>

      {/* 🌙 Sign-In Section */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ height: "80vh", position: "relative", zIndex: 1 }}
      >
        <div
          className="card p-4 shadow-lg border-0"
          style={{
            width: "340px",
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <h2 className="text-light mb-4">Sign In</h2>

          <form>
            {/* Username */}
            <div className="text-start mb-3">
              <label
                htmlFor="username"
                className="form-label text-light fw-semibold"
                style={{ fontSize: "0.9em" }}
              >
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your email"
                required
                className="form-control text-light"
                style={{
                  backgroundColor: "#0d1117",
                  borderColor: "#30363d",
                }}
              />
            </div>

            {/* Password */}
            <div className="text-start mb-2">
              <label
                htmlFor="password"
                className="form-label text-light fw-semibold"
                style={{ fontSize: "0.9em" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="form-control text-light"
                style={{
                  backgroundColor: "#0d1117",
                  borderColor: "#30363d",
                }}
              />
            </div>

            <div className="text-end">
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#58a6ff", fontSize: "0.85em" }}
              >
                Forgot password?
              </a>
            </div>

            {/* Sign-In Button */}
            <button
              type="submit"
              className="btn w-100 mt-4"
              style={{
                backgroundColor: "#238636",
                color: "#fff",
                borderRadius: "6px",
              }}
            >
              Sign In
            </button>

            {/* Create Account */}
            <div className="mt-3" style={{ fontSize: "0.9em", color: "#8b949e" }}>
              New to MergeWorks?{" "}
              <a href="firstpage.html" className="text-decoration-none text-primary">
                Create an account
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* 🧾 Footer */}
      <footer
        className="text-center py-3 mt-auto"
        style={{ backgroundColor: "#161b22", position: "relative", zIndex: 1 }}
      >
        <p className="mb-0" style={{ color: "#8b949e", fontSize: "0.85em" }}>
          © 2025 MergeWorks. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default SignInPage;
