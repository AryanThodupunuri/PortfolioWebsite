import ProgressBar from "../ProgressBar";
import "./index.scss";

const SkillList = ({ title, items }) => {
  return (
    <div className="skill-list">
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="skill-item">
            <div className="skill-row">
              <span className="skill-name">{item.name}</span>
              {typeof item.years !== 'undefined' && (
                <span className="skill-years">{item.years} {item.years === 1 ? 'year' : 'years'}</span>
              )}
            </div>
            <ProgressBar progress={item.progress} className={item.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;