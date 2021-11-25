import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Password Generator",
    desc: "Project 1: Password Generator",
    URL: "https://danielrg3.github.io/PasswordGeneratorHW03/",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2: Quiz with Timer",
    URL: "https://danielrg3.github.io/Homework04",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3: Budget App",
    URL: "https://frozen-ridge-69547.herokuapp.com/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.URL} target="_blank">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;
