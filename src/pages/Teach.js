import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Nav from "../components/Nav";

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
      </Box>
    </div>
  );
}
