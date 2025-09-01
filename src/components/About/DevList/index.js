import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "AWS (EC2, S3, Lambda, RDS, IAM, CloudWatch)", progress: 85, className: "aws-progress", years: 2 },
    { name: "Docker", progress: 80, className: "docker-progress", years: 2 },
    { name: "Terraform", progress: 60, className: "azure-progress", years: 1 },
    { name: "CI/CD (GitHub Actions)", progress: 70, className: "github-progress", years: 2 },
    { name: "Linux, Git, Bash", progress: 85, className: "github-progress", years: 3 },
    { name: "PostgreSQL / MySQL / MongoDB", progress: 80, className: "postgre-progress", years: 2 },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;