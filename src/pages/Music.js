import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Nav from "../components/Nav";

// import logo from "../img/nameVW.png";
import ball from "../img/wltvWhite.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#009ce2",
    minHeight: "100vh"
  },
  container: {},
  logo: {
    width: "100px"
  },
  logoBottom: {
    width: "60px",
    marginTop: 24,
    marginBottom: 64
  },
  intro: {
    height: "100vh",
    backgroundColor: "#009ce2",
    color: "white"
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    width: 150
  },
  musicType: {
    color: "white"
  },
  noise: {
    marginTop: 64,
    color: "white"
  }
}));

export default function Music() {
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
          m={[4]}
          style={{
            display: "flex",
            flexFlow: "row wrap",
            maxWidth: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button variant="outlined" size="large" className={classes.button}>
            electronic
          </Button>
          <Button variant="outlined" size="large" className={classes.button}>
            lofi
          </Button>
          <Button variant="outlined" size="large" className={classes.button}>
            symphonic
          </Button>
          <Button variant="outlined" size="large" className={classes.button}>
            acoustic
          </Button>
          <Button variant="outlined" size="large" className={classes.button}>
            alternative
          </Button>
          <Button variant="outlined" size="large" className={classes.button}>
            early stuff
          </Button>
        </Box>
        <Box style={{ marginTop: 32, width: "500px", maxWidth: "100%" }}>
          <h2 className={classes.musicType}>electronic</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/699916156&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            title="sound tracks"
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=0687f5/track=288290867/transparent=true/"
            seamless
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            title="sound tracks"
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=0687f5/track=288290867/transparent=true/"
            seamless
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            title="sound tracks"
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=0687f5/track=288290867/transparent=true/"
            seamless
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            title="sound tracks"
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=0687f5/track=288290867/transparent=true/"
            seamless
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            title="sound tracks"
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=0687f5/track=288290867/transparent=true/"
            seamless
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <h2 className={classes.musicType}>lofi</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <h2 className={classes.musicType}>symphonic</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <h2 className={classes.musicType}>acoustic</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <h2 className={classes.musicType}>alternative</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <h2 className={classes.musicType}>early stuff</h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="out of place"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/737725858&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/687978154&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
        </Box>
        <h2 className={classes.noise}>make more noise.</h2>

        <a href="/">
          <img src={ball} alt="logo" className={classes.logoBottom} />
        </a>
      </Box>
    </div>
  );
}