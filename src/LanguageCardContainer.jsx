import LanguageCard from "./LanguageCard";
import JavaIcon from "../src/assets/java.svg";
import CSharpIcon from "../src/assets/c-sharp.svg";
import PythonIcon from "../src/assets/python.svg";
import ReactIcon from "../src/assets/react.svg";
import DatabaseIcon from "../src/assets/database.svg";
import GitIcon from "../src/assets/git.svg";

import "./CSS/language-card-container.css";

export default function LanguageCardContainer() {
  return (
    <section id="skills">
      <div className="language-card-container-wrapper">
        <h1>Skills and Languages</h1>
        <div className="language-card-container">
          <LanguageCard
            language={"Java"}
            description={"Very good understanding of OOP and SOLID."}
            icon={JavaIcon}
          />
          <LanguageCard
            language={"C#"}
            description={"Capable of making well structured applications."}
            icon={CSharpIcon}
          />
          <LanguageCard
            language={"Python"}
            description={"Used for backend and libraries."}
            icon={PythonIcon}
          />
          <LanguageCard
            language={"React"}
            description={"Often used to make websites as a side hustle."}
            icon={ReactIcon}
          />
          <LanguageCard
            language={"Databases"}
            description={"Very good understanding and use of SQL."}
            icon={DatabaseIcon}
          />
          <LanguageCard
            language={"Git"}
            description={"Great use of git to manage my projects."}
            icon={GitIcon}
          />
        </div>
      </div>
    </section>
  );
}
