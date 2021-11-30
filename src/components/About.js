import React from "react";

export default function About() {
  return (
    <div className = "aboutPage">
      <div>
        <p className = "aboutTitle">
          We are a professional cat breeder with several certificates and years
          of experience
        </p>
        <p>We are here to provide you with the best cat possible</p>
        <img src="./images/catDoctor.jpg" alt="cat" />
        <q className="quote">As a real Cat Doctor I recommend this place -Cat Doctor</q>
      </div>
      <div>
        You can reach us by walking in any direction for 2 hours
       <p>Our phone number is : XXX-111-XXX </p> 
       <span className = "footnote">We don't actually sell cats...</span> 
      </div>
    </div>
  );
}
