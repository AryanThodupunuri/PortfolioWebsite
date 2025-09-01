import SkillList from "../SkillList";

const LanguageList = () => {
  const languages = [
    { name: "Python", progress: 90, className: "python-progress", years: 3 },
    { name: "Java", progress: 85, className: "java-progress", years: 3 },
    { name: "JavaScript/TypeScript", progress: 85, className: "web-progress", years: 3 },
    { name: "SQL", progress: 75, className: "sql-progress", years: 2 },
    { name: "Golang", progress: 50, className: "golang-progress", years: 1 },
    { name: "C++", progress: 50, className: "c-progress", years: 1 },
  ];

  return <SkillList title="Languages" items={languages} />;
};

export default LanguageList;