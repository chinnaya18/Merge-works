import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "logodraft.png";
const Welcome = () => {
  useEffect(() => {
    // Section reveal on scroll
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const trigger = window.innerHeight / 1.2;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) section.classList.add("visible");
      });
    };
    window.addEventListener("scroll", handleScroll);

    // Hero text animation on load
    const h1 = document.querySelector(".hero h1");
    const p = document.querySelector(".hero p");
    setTimeout(() => {
      h1.style.opacity = "1";
      h1.style.transform = "translateY(0)";
      setTimeout(() => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
      }, 500);
    }, 200);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark text-light position-relative" style={{ minHeight: "100vh" }}>
      {/* Floating Circles */}
      <div className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden z-0">
        {[
          { size: 120, top: "20%", left: "10%", delay: "0s", src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
          { size: 200, top: "60%", left: "70%", delay: "2s", src: "https://cdn-icons-png.flaticon.com/512/174/174854.png" },
          { size: 90, top: "35%", left: "50%", delay: "4s", src: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
          { size: 150, top: "75%", left: "25%", delay: "6s", src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
          { size: 100, top: "10%", left: "80%", delay: "8s", src: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
        ].map((circle, index) => (
          <div
            key={index}
            className="position-absolute rounded-circle"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              animation: `float 12s infinite ease-in-out`,
              animationDelay: circle.delay,
            }}
          >
            <img
              src={circle.src}
              alt="logo"
              className="w-100 h-100 rounded-circle"
              style={{ opacity: 0.9, objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top shadow-sm z-3">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <img
              src={logo} alt="MergeWorks logo" width="120" height="120" 
              alt="Logo"
              width="40"
              height="40"
              className="me-2 rounded-circle"
            />
            MergeWorks
          </a>
          <div>
            <button className="btn btn-outline-light me-2" onClick={() => scrollToSection("features")}>
              Features
            </button>
            <button className="btn btn-outline-light me-2" onClick={() => scrollToSection("explore")}>
              Explore
            </button>
            <button className="btn btn-success" onClick={() => scrollToSection("login")}>
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero d-flex flex-column align-items-center justify-content-center text-center vh-100 z-1">
        <h1
          className="fw-bold display-4 mb-3"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "1s" }}
        >
          Welcome to MergeWorks
        </h1>
        <p
          className="lead text-secondary mb-4"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "1s" }}
        >
          Build, share, and collaborate on code. Join our developer community today!
        </p>
        <button className="btn btn-success btn-lg" onClick={() => scrollToSection("features")}>
          Get Started
        </button>
      </section>

      {/* Explore Section */}
      <section id="explore" className="bg-secondary bg-opacity-50 py-5 text-center z-1">
        <div className="container">
          <h2 className="fw-bold mb-3">Explore MergeWorks</h2>
          <p className="text-light">
            Learn how to collaborate with other developers and contribute to open-source projects.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary bg-opacity-50 py-5 text-center z-1">
        <div className="container">
          <h2 className="fw-bold mb-3">Our Features</h2>
          <p className="text-light">
            Real-time collaboration, code sharing, and a community-driven workspace for learning and growth.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="bg-secondary bg-opacity-50 py-5 text-center z-1">
        <div className="container">
          <h2 className="fw-bold mb-3">Join MergeWorks</h2>
          <p className="text-light">
            Sign up today to access exclusive features and connect with other developers!
          </p>
          <button className="btn btn-outline-light mt-3">Sign Up</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-center py-3 text-light z-3">
        ©2025 MergeWorks — Made for learning purposes only.
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-40px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.6; }
        }
        section.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 1s ease, transform 1s ease;
        }
      `}</style>
    </div>
  );
};

export default Welcome;
