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
    color: "#ffb0d1",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  spotifyTrack: {
    transform: "rotate(45deg)",
    marginLeft: -187
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
            ).
            <br />
            here is some stuff i have done:
          </h2>
          <Box
            style={{
              display: "flex",
              flexFlow: "row wrap",
              maxWidth: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 150,
              // backgroundColor: "red",
              marginTop: 128,
              marginBottom: 160
            }}
          >
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/track/7I4Zo5GfQr6p6uvpPZb3Rn"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="iu except me"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/track/7dibn5DUG5XbsSf92TLZ0L"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="iu junebugs"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/3Hz7hiMMW5Wano0vu4CIOc"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="hasom self titled"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/487rgVFo2vmrtiG3bTMTYK"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="sleep habits self titled"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/6U303gOecoWsjxF8fROvuo"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="sleep habits lay down"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/6IaFBOBJLlZQ8MJQwL8CSx"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="public theatre anime intro"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/1Gr8vTdYzoWycVhCuUv7WC"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="hotel amber locks roses"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/19ZWfLKMKoc1RsSQrQXCUX"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="hotel amber byemilo summer daze"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/6BvJy3zfr51KxUlNNUzJOI"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="hotel amber public theatre i think im human"
            ></iframe>
            <iframe
              className={classes.spotifyTrack}
              src="https://open.spotify.com/embed/album/2i1Wabvo9xF1Zz6w7dWqSm"
              width="300"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="hotel amber lately"
            ></iframe>
          </Box>
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
