import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const portfolioData = {
  portfolio: [
    {
      cover: "https://customer-assets.emergentagent.com/job_resume-clone-2/artifacts/0whxvufh_cloud-kitchen-delivery-hero.webp",
      title: "Cloud-Native Food Ordering System",
      description: "Java, Spring Boot, Kafka, Docker, AWS",
      url: "#"
    },
    {
      cover: "https://customer-assets.emergentagent.com/job_resume-clone-2/artifacts/nxugjr3g_Screenshot%202025-09-01%20at%208.04.19%E2%80%AFPM.png",
      title: "UVA Course Planner Platform",
      description: "React, Python, AWS S3",
      url: "#"
    },
    {
      cover: "https://customer-assets.emergentagent.com/job_resume-clone-2/artifacts/9b7sjxso_512x512bb.jpg",
      title: "SlackLite – Real-time Messaging System",
      description: "Modern messaging app with FastAPI, React, MongoDB, WebSockets, JWT, file uploads, reactions, editing",
      url: "https://github.com/AryanThodupunuri/SlackLite"
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=11ryUw0fEVpa2oG23xzHsnkh2FwQlK7aT",
      title: "Taiwanese Bankruptcy Prediction",
      description: "Predicted bankruptcies using Logistic Regression, Random Forest, XGBoost, and SVM with PCA, Lasso, and class balancing",
      url: "https://github.com/AryanThodupunuri/taiwan-bankruptcy-prediction"
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1ZoqgfPMXn3aDyx-iolCs8e6EGrppguJ7",
      title: "Fake News Detection",
      description: "Built ML models using NLP embeddings and classifiers to detect fake vs. real news articles",
      url: "https://github.com/AryanThodupunuri/fake-news-detection"
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1xk_9JpLFH_VwzltU0rtdJ_O4dP8Ks1gE",
      title: "Traffic Sign CNN",
      description: "Trained a LeNet-5 CNN on the GTSRB dataset to classify 43 types of German traffic signs",
      url: "https://github.com/AryanThodupunuri/Traffic-Sign-CNN"
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1kzBMoeV1rzbWkzsekDhyfp80hrAFzdom",
      title: "Stock Price Prediction – KNN",
      description: "Explored KNN for stock trend classification and regression forecasting, with Quandl API data and feature engineering",
      url: "https://github.com/AryanThodupunuri/StockPricePrediction-KNN"
    },
    {
      cover: "https://drive.google.com/uc?export=view&id=1OOp6HkV_6UFl6lp2CapoCF90ExwY6usv",
      title: "Travel Packing Checklist",
      description: "HTML, CSS, JavaScript — generate packing list by trip type & duration",
      url: "https://github.com/AryanThodupunuri/travel-packing-checklist.github.io"
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
                                <img src={port.cover} alt="portfolio" className = "portfolio-image" loading="lazy" onError={(e) => { e.currentTarget.src = '/portfolio/placeholder.png'; }} />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => { if (port.url && port.url !== '#') window.open(port.url, '_blank'); }}>View</button>
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