import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Nav from "../components/Nav";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  whiteText: {
    color: "white"
  },
  email: {
    color: "#E80185",
    "&:hover": {
      textDecoration: "underline"
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
          <h2 className={classes.whiteText}>
            i make other peoples noise sound better (for money{" "}
            <span role="img" aria-label="emojis">
              🤑😈
            </span>
            )
          </h2>
          <h2 className={classes.whiteText}>
            book mixing / mastering at{" "}
            <a href="mailto: wltvmusic@gmail.com" className={classes.email}>
              wltvmusic@gmail.com
            </a>
          </h2>
        </Box>
      </Box>
    </div>
  );
}
