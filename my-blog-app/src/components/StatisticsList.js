import React from 'react';
import './StatisticsList.css';

export default function StatisticsList({ statsInfo }) {
  return (
    <div className="stats-cards-list">
      {statsInfo.map((item) => (
        <div className="stats-card">
          <div className="stats-value">
            <span className='medium-black-14'>{item.value}</span>
            <img src={item.srcPath} alt={item.imgName} />
          </div>
          <p className="stats-label">{item.labelName}</p>
        </div>
      ))}
    </div>
  );
}
