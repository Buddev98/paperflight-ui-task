import React from 'react';
import './LeftNavigation.css';
import IconsList from './IconsList';

export default function LeftNavigation({ data }) {
  const { icons, loginIcons } = data;
  return (
    <nav className='navigation-list'>
      <IconsList icons={icons}/>
      <IconsList icons={loginIcons}/>
    </nav>
  )
}

