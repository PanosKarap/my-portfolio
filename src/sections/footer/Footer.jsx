import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <hr className="footer-line" />
      <div className="footer-text-container">
        <p className="footer-text">
          © {year} Panagiotis Karapanagiotis.<br></br>
        </p>
        <p className="footer-text">All rights reserved.</p>
      </div>
    </>
  );
}
