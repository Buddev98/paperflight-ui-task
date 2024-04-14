import React, { useState } from 'react';
import IconsList from './IconsList';

import './RightSection.css';
import StatisticsList from './StatisticsList';
import RecepientsList from './RecepientsList';

export default function RightSection({ data }) {
  const [active, setActive] = useState();
  const { rightSectionIcons, statisticsInfo, recepients } = data;
  const toggleOptions = [
    { id:1, buttonLabel: 'Recipients', count: '08' },
    { id:2, buttonLabel: 'Sections', count: '05' }
  ];

  return (
    <div className='right-side-content'>
      <div className='right-side-header'>
        <h2>Collection “seeeek” </h2>
        <IconsList icons={rightSectionIcons} />
      </div>
      <p className='medium-black'>You shared 2 assets with 4 recipients</p>
      <p>1 month ago via QuickSend</p>
      <StatisticsList statsInfo={statisticsInfo} />
      <div className='toggle-options'>
        {toggleOptions.map(option => <button onClick={() => setActive(option.id)} className={`medium-black-16 ${active === option.id ? 'active' : ''}`} key={option.id}>{`${option.buttonLabel} - ${option.count}`}</button>)}
      </div>
      <RecepientsList userOptions={recepients} />
    </div>
  )
}

