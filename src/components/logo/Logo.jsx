import "./Logo.css";
import profilelogo from "../../assets/profile-logo-xmas.png";
import SocialIcon from "../socialIcon/SocialIcon";

import githublogo from "../../assets/github.png";
import linkedinlogo from "../../assets/linkedin.png";
import instagramlogo from "../../assets/instagram.png";

export default function Logo() {
  return (
    <>
      <div className="profile-logo-container">
        <img src={profilelogo} className="profile-logo"></img>
        <div className="profile-picture-icon-container">
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
    </>
  );
}
