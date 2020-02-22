import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Menu from "../components/Menu";

import logo from "../img/nameVW.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#009ce2",
    minHeight: "100vh"
  },
  container: {},
  logo: {
    width: "700px"
  },
  intro: {
    height: "100vh",
    backgroundColor: "#009ce2",
    color: "white"
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white"
  }
}));

export default function Music() {
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
        <img src={logo} alt="logo" className={classes.logo} />
        <Menu />
      </Box>
    </div>
  );
}
