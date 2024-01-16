import React from "react";
import "./home.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  return (
    <div className="home-section">
      <h1>ARAB INDUSTRIES PRIVATE LIMITED</h1>
      <div className="social-media">
        <FacebookRoundedIcon style={{ color: "blue", cursor: "pointer" }} />
        <InstagramIcon style={{ color: "pink", cursor: "pointer" }} />
        <TwitterIcon style={{ color: "blue", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Home;
