import SkillList from "../SkillList";

const TechList = () => {
  const techs = [
    { name: "React", progress: 90, className: "react-progress", years: 3 },
    { name: "Node / Express", progress: 80, className: "node-progress", years: 2 },
    { name: "Flask", progress: 85, className: "python-progress", years: 2 },
    { name: "Spring Boot", progress: 70, className: "springboot-progress", years: 1 },
    { name: "TensorFlow", progress: 65, className: "llm-progress", years: 1 },
    { name: "Pandas / NumPy", progress: 85, className: "pbi-progress", years: 2 },
    { name: "Kafka", progress: 50, className: "vue-progress", years: 1 },
  ];

  return <SkillList title="Frameworks & Technologies" items={techs} />;
};

export default TechList;