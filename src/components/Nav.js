import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import ball from "../img/wltvWhite.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#009ce2",
    minHeight: "100vh"
  },
  logo: {
    width: "100px"
  },
  navItem: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textDecoration: "none",
    "&:hover": {
      color: "pink"
    }
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <Box
      p={[4]}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <a href="/">
        <img src={ball} alt="logo" className={classes.logo} />
      </a>
      <Box
        style={{
          display: "flex",
          justifyContent: "row wrap",
          alignItems: "center"
        }}
      >
        <a href="/teach" className={classes.navItem}>
          <h2>teach</h2>
        </a>
        <a href="/music" className={classes.navItem}>
          <h2>music</h2>
        </a>
        <a href="/work" className={classes.navItem}>
          <h2>work</h2>
        </a>
      </Box>
    </Box>
  );
}
