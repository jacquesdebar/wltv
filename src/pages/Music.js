import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Nav from "../components/Nav";

// import logo from "../img/nameVW.png";
import ball from "../img/wltvWhite.png";

import "../css/music.css";

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
    marginTop: 64,
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
          <a href="#electronic">
            <Button variant="outlined" size="large" className={classes.button}>
              electronic
            </Button>
          </a>
          <a href="#lofi">
            <Button variant="outlined" size="large" className={classes.button}>
              lofi
            </Button>
          </a>
          <a href="#symphonic">
            <Button variant="outlined" size="large" className={classes.button}>
              symphonic
            </Button>
          </a>
          <a href="#acoustic">
            <Button variant="outlined" size="large" className={classes.button}>
              acoustic
            </Button>
          </a>
          <a href="#alternative">
            <Button variant="outlined" size="large" className={classes.button}>
              alternative
            </Button>
          </a>
          <a href="#early">
            <Button variant="outlined" size="large" className={classes.button}>
              early stuff
            </Button>
          </a>
        </Box>
        <Box style={{ width: "500px", maxWidth: "100%" }}>
          <h2 className={classes.musicType} id="electronic">
            electronic
          </h2>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="salty skin"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/759753076&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
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
            title="bodhi"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/741148318&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="fine prince"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718534636&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron epilogue"
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
            title="fly away"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/693041908&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="work in regress"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/668795336&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="breathe"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/664092104&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="this isn't going to be the genre you expect"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/644466936&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="anxious"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/606223470&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="thick iron fog"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/603223431&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="take ur time"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/603227331&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="yours"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/594683526&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="am i welcome here"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/598643292&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="weirdchordshit"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/586766703&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="cage in my chest"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556637499&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="we are"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/476651046&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="just fine"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/462568935&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="formula"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427210068&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="abandoned"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/425482011&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="crystal coffin"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/418001668&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="flowers"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/373389815&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="august"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340929089&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <hr />
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="earthquake caused by cats"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327798091&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="caught up"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327798088&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="smack blues"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327798050&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="digit splash"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327798049&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="cyber burp"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327798047&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <hr />
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="launch"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/594683526&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <hr />
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="launch"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327792936&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="expedition"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327792935&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="slingshot round the sun"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327792934&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="alien"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327792932&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="night shift"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327792931&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <hr />
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="cyber burp"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276717941&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="motor control"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261271653&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="rubber chicken"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/243203814&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="conveyor"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/238572593&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="fury"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236386607&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="forward"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233269665&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="dance ii"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233268861&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="eight track"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233267883&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="dreki"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213140333&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="partay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211099067&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <hr />
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="strut"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195622790&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="fury preview"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159721714&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="goliath remastered"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/140960817&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="goliath"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138612216&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="saved"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138605608&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="break"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138605529&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="dance"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138605408&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="colorless"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138605199&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>
          <iframe
            width="100%"
            height="20"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="cascade"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138505587&color=%23e80099&inverse=true&auto_play=false&show_user=true"
          ></iframe>

          <h2 className={classes.musicType} id="lofi">
            lofi
          </h2>
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
          <h2 className={classes.musicType} id="symphonic">
            symphonic
          </h2>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="sound tracks"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=288290867/transparent=true/"
            seamless
            title="chase the dawn"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=1303422850/transparent=true/"
            seamless
            title="ode to brian"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=2485105502/transparent=true/"
            seamless
            title="magellan"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=2246894760/transparent=true/"
            seamless
            title="eye of the hurricane"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=1657604104/transparent=true/"
            seamless
            title="serenity chase"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=1394953603/transparent=true/"
            seamless
            title="final heist"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=3907097184/size=small/bgcol=ffffff/linkcol=E80185/track=4210504806/transparent=true/"
            seamless
            title="unspoken resolve"
          >
            <a href="http://wilsonrahnsymphonic.bandcamp.com/album/sound-tracks">
              Sound Tracks by Wilson Rahn Symphonic
            </a>
          </iframe>
          <hr />
          <h2 className={classes.musicType} id="acoustic">
            acoustic
          </h2>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="may i rest in peace"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=1747076314/transparent=true/"
            seamless
            title="thanks for everything"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=439660152/transparent=true/"
            seamless
            title="shadows"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=1309071358/transparent=true/"
            seamless
            title="hypothermia"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=327820799/transparent=true/"
            seamless
            title="walking blindly"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=3162180937/transparent=true/"
            seamless
            title="rampancy"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=2266139025/transparent=true/"
            seamless
            title="lungs"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=4267821679/size=small/bgcol=ffffff/linkcol=E80185/track=3684424258/transparent=true/"
            seamless
            title="hearts and flowers"
          >
            <a href="http://wilsonrahn.bandcamp.com/album/may-i-rest-in-peace">
              May I Rest In Peace by Wilson Rahn
            </a>
          </iframe>

          <h2 className={classes.musicType} id="alternative">
            alternative
          </h2>

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=1896654458/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="motor control"
          >
            <a href="http://wilsonrahn.bandcamp.com/track/motor-control">
              Motor Control by Wilson Rahn
            </a>
          </iframe>
          <hr />

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/track=4119682127/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="pretend the world is ours"
          >
            <a href="http://wilsonrahn.bandcamp.com/track/pretend-the-world-is-ours">
              Pretend the World is Ours by Wilson Rahn, Claire McKenzie
            </a>
          </iframe>

          <hr />

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="one knight stands"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/track=3395783717/transparent=true/"
            seamless
            title="heart attack"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/track=3986216951/transparent=true/"
            seamless
            title="rue the day"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/track=2424751204/transparent=true/"
            seamless
            title="amnesia"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/track=3826938101/transparent=true/"
            seamless
            title="shouldn't be you"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2723816349/size=small/bgcol=ffffff/linkcol=E80185/track=1685593591/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/one-knight-stands">
              One Knight Stands by Black Gingham
            </a>
          </iframe>
          <hr />

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=598772989/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=2713974574/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=647871677/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=2792186259/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=3634299179/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=4150619123/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=853614176/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2302951944/size=small/bgcol=ffffff/linkcol=E80185/track=2692392560/transparent=true/"
            seamless
            title="aleahcim"
          >
            <a href="http://blackgingham.bandcamp.com/album/tug-of-war">
              Tug of War by Black Gingham
            </a>
          </iframe>

          <h2 className={classes.musicType} id="early">
            early stuff
          </h2>

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1163942920/size=small/bgcol=ffffff/linkcol=E80185/track=640069452/transparent=true/"
            seamless
            title="cast aside"
          >
            <a href="http://slimwilly.bandcamp.com/album/realitys-bogus">
              Reality&#39;s Bogus by Slim Willy
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1163942920/size=small/bgcol=ffffff/linkcol=E80185/track=2416267257/transparent=true/"
            seamless
            title="techno duck"
          >
            <a href="http://slimwilly.bandcamp.com/album/realitys-bogus">
              Reality&#39;s Bogus by Slim Willy
            </a>
          </iframe>
          <hr />

          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/transparent=true/"
            seamless
            title="tropical penguins"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=4033659253/transparent=true/"
            seamless
            title="dadgad"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=3628839952/transparent=true/"
            seamless
            title="purple dinosaurs"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=4010872410/transparent=true/"
            seamless
            title="thunderstorm"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=3502756480/transparent=true/"
            seamless
            title="aspirations"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=1723891404/transparent=true/"
            seamless
            title="thrown away"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
          <iframe
            style={{ border: 0, width: "100%", height: 42 }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2682548650/size=small/bgcol=ffffff/linkcol=E80185/track=860393090/transparent=true/"
            seamless
            title="point of view"
          >
            <a href="http://tropicalpenguins.bandcamp.com/album/tropical-penguins">
              Tropical Penguins by Tropical Penguins
            </a>
          </iframe>
        </Box>
        <h2 className={classes.noise}>make more noise.</h2>

        <a href="#top">
          <img src={ball} alt="logo" className={classes.logoBottom} />
        </a>
      </Box>
    </div>
  );
}
