import React from "react";
import Links from "./Links"

function About(props) {
  const {linkedin, github, bio} = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ==="" || bio == null ? null:<p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
