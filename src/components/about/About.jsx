import "./About.css";
import SocialIcon from "../socialIcon/SocialIcon.jsx";

import githublogo from "../../assets/github.png";
import linkedinlogo from "../../assets/linkedin.png";
import instagramlogo from "../../assets/instagram.png";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="occupation">Software Engineer</h2>
      <h1 className="name">Hello! I'm Panagiotis Karapanagiotis.</h1>
      <p>
        I'm 20 years old and was born in Greece. I graduated from the{" "}
        <a href="https://unipi.gr" target="_blank">
          University of Piraeus
        </a>{" "}
        with a degree in Informatics, while I was also testing and improving my
        skills by building some <a href="#">personal projects</a> in my free
        time. I specialize in App Development and am currently looking for job
        opportunities to apply my knowledge and grow as a developer.
      </p>
      <div className="about-icon-container">
        <SocialIcon
          icon={githublogo}
          url="https://github.com/PanosKarap"
        ></SocialIcon>
        <SocialIcon
          icon={linkedinlogo}
          url="https://www.linkedin.com/in/panagiotis-karapanagiotis/"
        ></SocialIcon>
        <SocialIcon
          icon={instagramlogo}
          url="https://www.instagram.com/_.panoskarap._/"
        ></SocialIcon>
      </div>
    </div>
  );
}
