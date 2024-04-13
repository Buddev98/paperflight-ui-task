import React from 'react';
import data from './LeftNavigationData.json';
import './LeftNavigation.css';
import IconsList from './IconsList';

export default function LeftNavigation() {
  const { icons, loginIcons } = data;
  return (
    <nav className='navigation-list'>
      <IconsList icons={icons}/>
      <IconsList icons={loginIcons}/>
    </nav>
  )
}

