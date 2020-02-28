import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Nav from "../components/Nav";

// import logo from "../img/nameVW.png";
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
          <TwitterTweetEmbed tweetId={"1216904911318736897"} />
          <a href="mailto: wltvmusic@gmail.com" className={classes.email}>
            <h2>wltvmusic@gmail.com</h2>
          </a>
        </Box>
      </Box>
    </div>
  );
}
