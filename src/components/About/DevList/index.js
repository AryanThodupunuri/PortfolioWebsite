import SkillList from "../SkillList";

const DevList = () => {
  const devs = [
    { name: "AWS (EC2, S3, Lambda, RDS, IAM, CloudWatch)", progress: 85, className: "aws-progress", years: 2 },
    { name: "Docker", progress: 80, className: "docker-progress", years: 2 },
    { name: "Terraform", progress: 60, className: "azure-progress", years: 1 },
    { name: "CI/CD (GitHub Actions)", progress: 70, className: "github-progress", years: 2 },
    { name: "Linux, Git, Bash", progress: 85, className: "github-progress", years: 3 },
    { name: "PostgreSQL / MySQL / MongoDB", progress: 80, className: "postgre-progress", years: 2 },
  ];

  return <SkillList title="Development Tools" items={devs} />;
};

export default DevList;