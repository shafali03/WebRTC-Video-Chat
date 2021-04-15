import React from "react";
import { Typography, AppBar } from "@material-ui/core";

import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
    </div>
  );
};

export default App;
