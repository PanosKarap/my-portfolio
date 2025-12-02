import "./Logo.css";
import profilelogo from "../../assets/profile-logo-xmas.png";
import SocialIcon from "../socialIcon/SocialIcon";

import GithubLogo from "../../assets/github_logo.svg?react";
import LinkedinLogo from "../../assets/linkedin_logo.svg?react";
import InstagramLogo from "../../assets/instagram_logo.svg?react";

export default function Logo() {
  return (
    <>
      <div className="profile-logo-container">
        <img src={profilelogo} className="profile-logo"></img>
        <div className="profile-picture-icon-container">
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
    </>
  );
}
