import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Nav from "../components/Nav";
import Icons from "../components/Icons";

import "../css/teach.css"

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

export default function Teach() {
  const classes = useStyles();
  const isMobile = window.innerWidth < 480;

  function Tweety() {
    if (isMobile) {
      return (
        <TwitterTweetEmbed
          // style={{ alignSelf: "flexStart" }}
          tweetId={"1216904911318736897"}
          options={{ width: 300 }}
        />
      );
    }
    return <TwitterTweetEmbed tweetId={"1216904911318736897"} />;
  }

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
          <Tweety />

          <a href="mailto: wltvmusic@gmail.com" className={classes.email}>
            <h2>wltvmusic@gmail.com</h2>
          </a>
        </Box>

        <Box
          style={{
            display: "flex",
            flexFlow: "column wrap",
            maxWidth: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "white",
            marginTop: "32px"
          }}
        >
        <h2 style={{marginBottom: `-8px`}}>resources</h2>
        <p style={{lineHeight: `1.6`}}>interactive introduction to production: <a href="https://learningmusic.ableton.com">learningmusic.ableton.com</a><br/>
        interactive introduction to synthesis: <a href="https://learningsynths.ableton.com">learningsynths.ableton.com</a><br/>
        ableton live trial (currently 90 days free!!!): <a href="https://www.ableton.com/en/trial/">ableton.com/en/trial/</a><br/>
        live lite quickstart: <a href="https://youtu.be/7QKY3wFEx7g">youtu.be/7QKY3wFEx7g</a>
        </p>
        </Box>
      </Box>
      <Icons />
      <Box style={{height:`64px`}}/>
    </div>
  );
}
