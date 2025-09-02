import "./index.scss"; 
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faHtml5, faAmazon, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import LanguageList from "./LanguageList";
import AboutTabs from "./Tabs";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                      I'm Aryan Thodupunuri — a software engineer focused on full‑stack and ML systems. I've built production apps across React, Python/Flask, and Java/Spring Boot, deployed on AWS with Docker, and implemented data/NLP pipelines. I enjoy shipping reliable user experiences, optimizing performance, and collaborating in fast, iterative teams.
                    </p>
                    <p>
                      Recently, I interned as a Software Engineering Intern at Booz Allen Hamilton (supplier intelligence tool with React, Flask, AWS) and contributed at Red Light Management (ETL & API performance), UVA Link Lab (CNN‑RNN flood forecasting in TensorFlow), and Commonwealth Trivia Ventures (React Native progression, PostgreSQL/Django APIs).
                    </p>

                    <AboutTabs />
                    <LanguageList />
                </div>
                <div className = "stage-cube-cont">
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faAmazon}/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About