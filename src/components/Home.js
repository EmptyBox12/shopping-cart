import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <div className = "homePageFirst">
        <span className= "homePageTitle">We don't sell cats here!</span>
        <span className= "homePageSmallText">Really this is fake...</span>
        <img src="./images/petshopMain.jpg" alt="cat" />
      </div>
      <span>
        If you want to see the cats that we don't sell click{" "}
        <Link to="/products">here</Link>
      </span>
    </div>
  );
}
