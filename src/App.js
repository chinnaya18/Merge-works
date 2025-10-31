import React from "react";
import RightSidebarPopularRepos from "./RightSidebarPopularRepos";
import Home from "./Home";
import Welcome from "./Welcome";
import LeftSideBar from "./leftSideBar";

function App() {
  return (
    <div>
      <Welcome >
      <Home />
      <LeftSideBar width="350px" headerHeight="60px" />
      <RightSidebarPopularRepos width="350px" headerHeight="60px" />
    </Welcome>

    </div>
  );
}

export default App;
