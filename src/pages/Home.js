import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Icons from "../components/Icons";
import Menu from "../components/Menu";

import bandana from "../img/bandana.png";
import prof from "../img/prof.jpg";
// import name from "../img/nameVDB.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#009ce2"
  },
  container: {},
  image: {
    height: "100vh",
    backgroundImage: `url(${prof})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  intro: {
    height: "100vh",
    backgroundColor: "#009ce2",
    color: "white"
  }
}));

export default function Music() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={6} className={classes.image} />
        <Grid
          container
          item
          xs={12}
          md={6}
          direction="column"
          wrap="nowrap"
          alignItems="center"
          justify="center"
          className={classes.intro}
        >
          <Box width={[0.9, 0.85, 0.6]}>
            <h1>what's up! i'm wilson</h1>
            <h2>//</h2>
            <h2>//</h2>
            <h2>//</h2>
            <h2>
              i like glitchy things and pretty things and friends and saturated
              colors. i'm seattle based, my favorite colors are pink and blue,
              and i would love it if you would share my music with your friends
              :)
            </h2>
          </Box>
          <Menu />
          <Icons />
        </Grid>
      </Grid>
    </div>
  );
}
