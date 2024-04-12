import React from 'react';
import data from './LeftNavigationData.json';
import './LeftNavigation.css';

export default function LeftNavigation() {
  const { icons } = data;
  return (
    <nav>
      <ul className='icons-list'>
        {icons.map(icon => <li key={icon.name}><img src={icon.srcPath} /></li>)}
      </ul>
    </nav>
  )
}

