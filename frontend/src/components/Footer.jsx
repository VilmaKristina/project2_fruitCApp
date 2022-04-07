import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const track = useSelector((state) => state.allTrack.track);

  return (
    <section className="trackPage">
      <Link to="/track" className="linkTrackPage">
        My VitC Track ({track.length} {track.length === 1 ? "fruit" : "fruits"})
      </Link>
    </section>
  );
}

export default Footer;
