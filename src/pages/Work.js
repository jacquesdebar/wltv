import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Nav from "../components/Nav";

import bg from "../img/wlbg.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  logo: {
    width: "100px"
  },
  email: {
    color: "white"
  }
}));

export default function Teach() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        p={[4]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Nav />
        <Box
          style={{
            display: "flex",
            flexFlow: "column wrap",
            maxWidth: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2>i make other people's noise sound better!</h2>
          <h2>book mixing / mastering:</h2>
          <a href="mailto: wltvmusic@gmail.com" className={classes.email}>
            <h2>wltvmusic@gmail.com</h2>
          </a>
        </Box>
      </Box>
    </div>
  );
}
