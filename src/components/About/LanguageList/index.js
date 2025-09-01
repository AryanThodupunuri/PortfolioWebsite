import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Python", progress: 90, className: "python-progress", years: 3 },
    { name: "Java", progress: 85, className: "java-progress", years: 3 },
    { name: "JavaScript/TypeScript", progress: 85, className: "web-progress", years: 3 },
    { name: "SQL", progress: 75, className: "sql-progress", years: 2 },
    { name: "Golang", progress: 50, className: "golang-progress", years: 1 },
    { name: "C++", progress: 50, className: "c-progress", years: 1 },
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;