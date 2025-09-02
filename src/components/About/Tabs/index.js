import { NavLink } from 'react-router-dom';
import './index.scss';

const AboutTabs = () => {
  return (
    <div className="about-tabs" role="tablist" aria-label="Skills categories">
      <NavLink to="/about" className={({ isActive }) => `tab ${isActive ? 'active' : ''}`} end>
        Languages
      </NavLink>
      <NavLink to="/about/tech" className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}>
        Frameworks/Technologies
      </NavLink>
      <NavLink to="/about/dev" className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}>
        Development Tools
      </NavLink>
    </div>
  );
};

export default AboutTabs;