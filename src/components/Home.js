import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePage">
      <div className = "homePageFirst">
        <span>We don't sell cats here!</span>
        <span>Really this is fake...</span>
      </div>
      <span>
        If you want to see the cats that we don't sell click{" "}
        <Link to="/products">here</Link>
      </span>
    </div>
  );
}
