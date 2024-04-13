import React from 'react';
import IconsList from './IconsList';

import './RightSection.css';
import StatisticsList from './StatisticsList';
import RecepientsList from './RecepientsList';

export default function RightSection({ data }) {
  const { rightSectionIcons, statisticsInfo, recepients } = data;
  return (
    <div className='right-side-content'>
      <div className='right-side-header'>
        <h2>Collection “seeeek” </h2>
        <IconsList icons={rightSectionIcons} />
      </div>
      <p className='medium-black'>You shared 2 assets with 4 recipients</p>
      <p>1 month ago via QuickSend</p>
      <StatisticsList statsInfo={statisticsInfo} />
      <RecepientsList userOptions={recepients} />
    </div>
  )
}

