import "./CSS/title.css";
import profilePicture from "./assets/profile_picture.png";

export default function Title() {
  return (
    <div className="title-photo-container">
      <div className="title-container">
        <div className="title-group">
          <h2>Software Engineer</h2>
          <hr />
        </div>
        <h1>Hello! I'm Panagiotis Karapanagiotis.</h1>
        <p>
          I'm 20 years old and was born in Greece. I graduated from the{" "}
          <a href="https://unipi.gr" target="_blank">
            University of Piraeus
          </a>{" "}
          with a degree in Informatics, while I was also testing and improving
          my skills by building some <a href="#">personal projects</a> in my
          free time. I specialize in App Development and am currently looking
          for job opportunities to apply my knowledge and grow as a developer.
        </p>
      </div>
      <img
        className="profile-picture"
        src={profilePicture}
        alt="Profile Picture"
      />
    </div>
  );
}
