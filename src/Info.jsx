import "./CSS/info.css";
import profilePicture from "./assets/profile_picture.png";

function Info() {
  return (
    <div className="container">
      <h1>Software Developer</h1>
      <h2>Part-Time Web Developer</h2>
      <img
        className="profile-picture"
        src={profilePicture}
        alt="Profile Picture"
      />
    </div>
  );
}
export default Info;
