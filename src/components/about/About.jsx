import "./About.css";
import SocialIcon from "../socialIcon/SocialIcon.jsx";

import GithubLogo from "../../assets/github_logo.svg?react";
import LinkedinLogo from "../../assets/linkedin_logo.svg?react";
import InstagramLogo from "../../assets/instagram_logo.svg?react";

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
          icon={<GithubLogo />}
          url="https://github.com/PanosKarap"
        ></SocialIcon>
        <SocialIcon
          icon={<LinkedinLogo />}
          url="https://www.linkedin.com/in/panagiotis-karapanagiotis/"
        ></SocialIcon>
        <SocialIcon
          icon={<InstagramLogo />}
          url="https://www.instagram.com/_.panoskarap._/"
        ></SocialIcon>
      </div>
    </div>
  );
}
