import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: 'May 2025 – Aug 2025',
      title: 'Software Engineering Intern — Booz Allen Hamilton (McLean, VA)',
      description: [
        'Built and deployed a full-stack supplier intelligence tool using <b>React</b>, <b>Flask</b>, and <b>AWS</b> (Data Lake, Lambda, EC2), enabling analysts to filter 10K+ vendors in real time and replacing hours of manual spreadsheet review.',
        'Architected a backend pipeline & REST API using <b>spaCy NLP</b> and custom rules to extract key fields from 1,200+ contract PDFs, converting them into structured data searchable by 50+ analysts.',
        'Designed unit testing framework with mock contracts to automate parsing evaluation, improving accuracy to 90%+ and reducing QA time by 30% (Agile sprints in Jira/Confluence).',
      ],
      expanded: false,
    },
    {
      date: 'Sept 2024 – May 2025',
      title: 'Software Engineering Intern — Red Light Management (Charlottesville, VA)',
      description: [
        'Automated <b>ETL</b> pipelines in <b>Python</b> and <b>SQL</b> to aggregate Spotify, Apple Music, and Ticketmaster datasets.',
        'Optimized API performance and caching, reducing query latency by <b>35%</b> during peak fan traffic.',
        'Containerized backend services with <b>Docker</b> on <b>AWS</b>, improving reliability and simplifying cloud deployment.',
      ],
      expanded: false,
    },
    {
      date: 'May 2024',
      title: 'Hack Week Participant — Palantir Technologies (Charlottesville, VA)',
      description: [
        'Developed backend logic for a <b>Flask</b>-based dashboard that analyzed <b>50,000+</b> simulated emergency dispatch records to detect underserved neighborhoods and analyze factors contributing to delayed response times in high-density urban zones.',
        'Integrated <b>Leaflet.js</b> with clustering algorithms to visualize incident hotspots on an interactive map, helping optimize station placement and improve emergency coverage; presented insights to Palantir engineers during the final demo.',
      ],
      expanded: false,
    },
    {
      date: 'Apr 2024 – Aug 2024',
      title: 'Machine Learning & Backend Engineering Intern — UVA Link Lab',
      description: [
        'Implemented the RNN layer of a CNN‑RNN flood forecasting model in <b>Python/TensorFlow</b>, achieving 95% faster runtime and 15% higher accuracy than physics-based models.',
        'Containerized and deployed the model on <b>AWS EC2</b> with <b>Docker</b> and <b>Node.js</b>, exposing RESTful APIs that delivered real-time forecasts to 100+ users via Plotly Dash dashboards.',
      ],
      expanded: false,
    },
    {
      date: 'Jun 2023 – Aug 2023',
      title: 'Software Engineering Intern — Commonwealth Trivia Ventures (Ashburn, VA)',
      description: [
        'Redesigned user progression system in <b>React Native</b> with a flexible tiered rewards framework (5+ tiers, milestones, animations, notifications), increasing session length by 18% and retention by 12%.',
        'Implemented and optimized <b>PostgreSQL</b> schemas, complex queries, and performance indexes for progression and leaderboard features, reducing API read latency by 25%.',
        'Created 3 <b>Django</b> (<b>Python</b>) REST API endpoints backed by PostgreSQL to track 1K+ user achievements.',
      ],
      expanded: false,
    },
    {
      date: 'June 2022 – August 2023',
      title: 'Code Coach — The Coderschool Ashburn',
      description: [
        'Tailor lessons according to students\' ability levels in 1-on-1 training to help them gain proficiency in various programming languages.',
        'Work closely with students as they create various projects regarding the programming language they are working on (some projects are as simple as an animation, others are as complex as apps with functional UI).',
      ],
      expanded: false,
    },
  ]);



  const handleItemClick = (index) => {
    setEvents((prev) => prev.map((e, i) => (i === index ? { ...e, expanded: !e.expanded } : e)));
  };

  const renderItems = (items) => (
    items.map((event, index) => (
      <div
        className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
        key={index}
        onClick={() => handleItemClick(index)}
      >
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <h2>{event.title}</h2>
          {event.expanded ? (
            <div>
              {event.description.map((desc, descIndex) => (
                <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </div>
          ) : (
            <>
              <div className="more">
                <p>Click for more</p>
              </div>
              <div className="date">{event.date}</div>
            </>
          )}
        </div>
      </div>
    ))
  );

  return (
    <div className="timeline-container">
      {renderItems(events)}
    </div>
  );
};

export default Timeline;