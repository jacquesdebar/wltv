import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import WorkIcon from "@material-ui/icons/Work";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    width: 100
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box
      m={[4]}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        display: "flex wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "60%"
      }}
    >
      <a href="/teach" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<SentimentVerySatisfiedIcon />}
          className={classes.button}
        >
          Teach
        </Button>
      </a>
      <a href="/music" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<MusicNoteIcon />}
          className={classes.button}
        >
          Music
        </Button>
      </a>
      <a href="/work" style={{ textDecoration: "none" }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<WorkIcon />}
          className={classes.button}
        >
          Work
        </Button>
      </a>
    </Box>
  );
};
