import LanguageCard from "./LanguageCard";
import JavaIcon from "../src/assets/java.svg";
import "./CSS/language-card-container.css";

export default function LanguageCardContainer() {
  return (
    <div className="language-card-container">
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      <LanguageCard
        language={"Java"}
        description={"Very good understanding of OOP and SOLID."}
        icon={JavaIcon}
      />
      {/* <LanguageCard />
      <LanguageCard />
      <LanguageCard />
      <LanguageCard />
      <LanguageCard /> */}
    </div>
  );
}
