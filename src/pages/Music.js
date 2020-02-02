import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";

import classNames from "classnames";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import WorkIcon from "@material-ui/icons/Work";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import bandana from "../img/bandana.png";
// import name from "../img/nameVDB.png";
import apple from "../img/icons/apple.svg";
import instagram from "../img/icons/instagram.svg";
import spotify from "../img/icons/spotify.svg";
import soundcloud from "../img/icons/soundcloud.svg";
import twitter from "../img/icons/twitter.svg";
import youtube from "../img/icons/youtube.svg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#009ce2"
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
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white"
  },
  imageIcon: {
    height: "100%",
    color: "white"
  },
  iconRoot: {
    textAlign: "center",
    margin: theme.spacing(1)
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
          <Box
            m={[4]}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              size="large"
              startIcon={<SentimentVerySatisfiedIcon />}
              className={classes.button}
            >
              Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<MusicNoteIcon />}
              className={classes.button}
            >
              Music
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<WorkIcon />}
              className={classes.button}
            >
              Work
            </Button>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={apple} />
            </Icon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={spotify} />
            </Icon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={soundcloud} />
            </Icon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={instagram} />
            </Icon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={twitter} />
            </Icon>
            <Icon classes={{ root: classes.iconRoot }}>
              <img className={classes.imageIcon} src={youtube} />
            </Icon>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
