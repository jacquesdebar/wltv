import React from "react";
// import { Link } from "./";

export default () => (
  <div className="row mt-2 mb-3 pt-3">
    <div className="col-5 float-center text-center">
      <span id="ikonz" className="d-inline-block">
        <a
          id="instagram"
          href="https://www.instagram.com/wilsonlikethevolleyball_/"
        >
          <i className="fab fa-instagram" aria-label="instagram" />
        </a>
        <a id="twitter" href="https://twitter.com/wilsonlikethevo">
          <i className="fab fa-linkedin" aria-label="linkedin" />
        </a>
        <a
          id="soundcloud"
          href="https://soundcloud.com/wilsonlikethevolleyball/"
        >
          <i className="fab fa-soundcloud" aria-label="soundcloud" />
        </a>
        <a
          id="spotify"
          href="https://open.spotify.com/artist/4hba9BjCS4J6XkfSaKyxL1"
        >
          <i className="fab fa-spotify" aria-label="spotify" />
        </a>
        <a
          id="apple"
          href="https://music.apple.com/us/artist/wilsonlikethevolleyball/1289135886"
        >
          <i className="fab fa-apple" aria-label="apple" />
        </a>
        <a id="youtube" href="https://www.youtube.com/wilsonlikethevolleyball">
          <i className="fab fa-youtube" aria-label="youtube" />
        </a>
        {/*
                <a id="audius" href="https://audius.co/wltv">
                    <i className="fab fa-spotify" aria-label="audius" />
                </a> */}
      </span>
    </div>
  </div>
);
