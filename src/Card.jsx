import "./CSS/card.css";

function Card() {
  return (
    <div className="photo">
      <div className="border">
        <img
          className="card-image"
          src="https://avatars.githubusercontent.com/u/65207010?v=4"
          alt="Profile Picture"
        ></img>
      </div>
    </div>
  );
}

export default Card;
