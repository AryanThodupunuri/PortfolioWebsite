import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const portfolioData = {
  portfolio: [
    {
      cover: "/portfolio/placeholder.png",
      title: "UVA Course Planner Platform",
      description: "React, Python, AWS S3",
      url: "#"
    },
    {
      cover: "/portfolio/placeholder.png",
      title: "Cloud-Native Food Ordering System",
      description: "Java, Spring Boot, Kafka, Docker, AWS",
      url: "#"
    }
  ]
};

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000); 

        return () => { 
            clearTimeout(timer);
        }
    }, []);

    const renderPortfolio = (portfolio) => { 
        return (
            <div className = "images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div key={idx} className="image-box">
                                <img src={port.cover} alt="portfolio" className = "portfolio-image" onError={(e) => { e.currentTarget.src = '/portfolio/placeholder.png'; }} />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => { if (port.url && port.url !== '#') window.open(port.url); }}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className = "page-title">
                    <AnimatedLetters letterClass = {letterClass} strArray={"Portfolio".split("")} idx={15}/>
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Portfolio