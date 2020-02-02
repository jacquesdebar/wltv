import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import bandana from "../img/bandana.png";
import name from "../img/nameVDB.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {},
  image: {
    height: "100vh",
    backgroundImage: `url(${bandana})`,
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row-reverse"
        spacing={0}
        className={classes.container}
      >
        <Grid item xs={12} lg={6} className={classes.image} />
        <Grid
          container
          item
          direction="column"
          wrap="nowrap"
          alignItems="center"
          justify="center"
          xs={12}
          lg={6}
          className={classes.intro}
        >
          <Grid container item direction="column" xs={10} sm={8}>
            <h1>what's up! i'm wilson!</h1>
            <h2>//</h2>
            <h2>//</h2>
            <h2>//</h2>
            <h2>
              i like glitchy things and pretty things and friends and saturated
              colors. im seattle based, my favorite colors right now are pink
              and blue, and i would love it if you would share my music with
              your friends :
            </h2>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            xs={10}
            sm={1}
            className={classes.navs}
          >
            <Button variant="outlined">Default</Button>
            <Button variant="outlined">Default</Button>
            <Button variant="outlined">Default</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
