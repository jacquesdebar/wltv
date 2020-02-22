import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";

import apple from "../img/icons/apple.svg";
import instagram from "../img/icons/instagram.svg";
import spotify from "../img/icons/spotify.svg";
import soundcloud from "../img/icons/soundcloud.svg";
import twitter from "../img/icons/twitter.svg";
import youtube from "../img/icons/youtube.svg";

const useStyles = makeStyles(theme => ({
  imageIcon: {
    height: "100%",
    color: "white"
  },
  iconRoot: {
    textAlign: "center",
    margin: theme.spacing(1)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://music.apple.com/us/artist/wilsonlikethevolleyball/1289135886"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={apple} alt="apple" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://open.spotify.com/artist/4hba9BjCS4J6XkfSaKyxL1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={spotify} alt="spotify" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://soundcloud.com/wilsonlikethevolleyball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.imageIcon}
            src={soundcloud}
            alt="soundcloud"
          />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://www.instagram.com/wilsonlikethevolleyball_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={instagram} alt="instagram" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://twitter.com/wilsonlikethevo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={twitter} alt="twitter" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://www.youtube.com/wilsonlikethevolleyball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={youtube} alt="youtube" />
        </a>
      </Icon>
    </Box>
  );
};
