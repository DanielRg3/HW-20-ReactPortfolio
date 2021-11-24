import React from "react";
import "./About.css";
import AboutMe from "../../media/AboutMe.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
            I consider myself as a gentle, honest and cheerful person who likes to encourage a good interaction among the members of the teams I work with to reach our goals on an organized and systematic manner. As for my passions I search for knowledge, and I always striveing to reach for perfection in the activities I develop. <br/>
            I started working as a Design Enginner in which I gain experence in working with design softwares such as Unigraphics Nx. Then I moved into the Failure Mode Analysis and I gained expereince working with a software called FIT.<br/>
            Currently I'm learingn software programming. I would like to develop softwares for the the new features an electrical, hybrid or autonomus vehicle must have.
        </p>
      </div>
      <div className="about-img">
        <img className="image" src={AboutMe} />
      </div>
    </div>
  );
};

export default About;
