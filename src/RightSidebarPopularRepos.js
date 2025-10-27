import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RightSidebarPopularRepos = ({
  width = "300px",
  headerHeight = "60px",
  title = "Popular Repo's",
}) => {
  return (
    <div
      className="position-fixed bg-dark text-light"
      style={{
        top: headerHeight,
        right: 0,
        margin: 5,
        width: width,
        height: `calc(100vh - ${headerHeight})`,
        boxShadow: "-5px 0 10px rgba(0,0,0,0.2)", // shadow to the left
        padding: "1rem",
        overflowY: "auto",
        zIndex: 1050,
      }}
    >
      <h5 className="mb-3 border-bottom border-secondary pb-2">{title}</h5>
      {/* Empty content area */}
    </div>
  );
};

export default RightSidebarPopularRepos;
