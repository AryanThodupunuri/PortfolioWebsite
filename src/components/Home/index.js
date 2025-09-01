import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import InitialsAvatar from '../InitialsAvatar';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Aryan Thodupunuri".split("");
    const jobArray = "software engineer.".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>H</span>
                <span className = {`${letterClass} _9`}>i</span>
                <br /> 
                <span className = {`${letterClass} _10`}>I</span>
                <span className = {`${letterClass} _11`}>\'m</span>
                &nbsp;
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2>Computer Science @ University of Virginia (’27)</h2>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="flat-button">CONTACT ME</Link>
                  <a className="flat-button" href="https://customer-assets.emergentagent.com/job_be1c6846-0316-4de7-bd4e-3d399cc0efa2/artifacts/mf41smqz_Thodupunuri%20Resume%20VAug2025.pdf" target="_blank" rel="noreferrer">DOWNLOAD RESUME</a>
                </div>
            </div>
            <div className="avatar-wrap">
              <InitialsAvatar initials="AT" size="lg" />
            </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home