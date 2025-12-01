import "./Button.css";
import cv from "../../files/KarapanagiotisCV.pdf";

export default function Button({ text }) {
  return (
    <a href={cv} download className="download-cv-button">
      {text}
    </a>
  );
}
