import React from "react";
import RightSidebarPopularRepos from "./RightSidebarPopularRepos";
import Home from "./Home";
import LeftSideBar from "./leftSideBar";

function App() {
  return (
    <div>
      <Home />
      <LeftSideBar width="350px" headerHeight="60px" />
      <RightSidebarPopularRepos width="350px" headerHeight="60px" />
    </div>
  );
}

export default App;
