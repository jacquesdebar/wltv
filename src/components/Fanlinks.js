import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";

import apple from "../img/icons/apple.svg";
// import instagram from "../img/icons/instagram.svg";
import spotify from "../img/icons/spotify.svg";
import soundcloud from "../img/icons/soundcloud.svg";
// import twitter from "../img/icons/twitter.svg";
import youtube from "../img/icons/youtube.svg";
import audius from "../img/icons/audius.png";
import bandcamp from "../img/icons/bandcamp.png";
import beatport from "../img/icons/beatport.png";
import deezer from "../img/icons/deezer.png";
import napster from "../img/icons/napster.png";
import tidal from "../img/icons/tidal.png";

const useStyles = makeStyles(theme => ({
  imageIcon: {
    height: "24px",
    width: "auto",
    color: "white"
  },
  iconRoot: {
    // textAlign: "center",
    width: "auto",
    margin: theme.spacing(1)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
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
          href="https://music.apple.com/us/artist/wilsonlikethevolleyball/1289135886"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={apple} alt="apple" />
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
          href="https://audius.co/wltv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={`${classes.imageIcon} ${classes.audiusIcon}`}
            src={audius}
            alt="audius"
          />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://music.youtube.com/channel/UCIdN_CGTiOs8ntzy7yqpkcg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={youtube} alt="youtube" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://www.deezer.com/us/artist/13837153"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={`${classes.imageIcon} ${classes.deezerIcon}`}
            src={deezer}
            alt="deezer"
          />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://tidal.com/browse/artist/9393227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={tidal} alt="tidal" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://us.napster.com/artist/wilsonlikethevolleyball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={napster} alt="napster" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://wilsonlikethevolleyball.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={bandcamp} alt="bandcamp" />
        </a>
      </Icon>
      <Icon classes={{ root: classes.iconRoot }}>
        <a
          href="https://www.beatport.com/artist/wilsonlikethevolleyball/749793?utm_source=toneden&utm_medium=bp_affiliate&utm_campaign=ToneDen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.imageIcon} src={beatport} alt="beatport" />
        </a>
      </Icon>
    </Box>
  );
};
