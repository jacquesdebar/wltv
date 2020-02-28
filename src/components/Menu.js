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
    borderColor: "white"
  }
}));

export default () => {
  const classes = useStyles();

  return (
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
        Teach
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
  );
};
