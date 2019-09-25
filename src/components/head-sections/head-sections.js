import React from 'react';
import './head-sections.scss';

const HeadSections = ({subtitle, title, description}) => {
  return (
        <div className="head-sections">
            <span className="subtitle">{subtitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default HeadSections;