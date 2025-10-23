import "./CSS/title.css";
import profilePicture from "./assets/profile_picture.png";

function Title() {
  return (
    <div className="title-photo-container">
      <div className="title-container">
        <h2>Software Engineer</h2>
        <h1>Hello! I'm Panagiotis Karapanagiotis.</h1>
        <p>
          I'm 20 years old and I was born in Greece. I graduated from the{" "}
          <a href="https://unipi.gr">University of Piraeus</a> in the field of
          Informatics, while I was also testing and improving my skills by
          building some <a href="#">personal projects</a>. I specialize in App
          Development. I'm currently looking for job opportunities where I can
          apply my skills and grow as a developer.
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
export default Title;
