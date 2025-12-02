import "./Language.css";
import LanguageCard from "../../components/languageCard/LanguageCard";

import JavaLogo from "../../assets/java_logo.svg?react";
import CsharpLogo from "../../assets/csharp_logo.svg?react";
import ReactLogo from "../../assets/react_logo.svg?react";
import PythonLogo from "../../assets/python_logo.svg?react";

export default function Language() {
  return (
    <>
      <div id="skills" className="language-container">
        <h1 className="language-title">Languages and Frameworks</h1>
        <div className="language-card-container">
          <LanguageCard languageIcon={<JavaLogo />} languageName={"Java"} />
          <LanguageCard languageIcon={<CsharpLogo />} languageName={"C#"} />
          <LanguageCard languageIcon={<ReactLogo />} languageName={"React"} />
          <LanguageCard languageIcon={<PythonLogo />} languageName={"Python"} />
        </div>
      </div>
    </>
  );
}
