import React from 'react';
import './IconsList.css';

export default function IconsList({ icons }) {
  return (
    <ul className='icons-list'>
      {icons.map(icon => <li key={icon.name} className={!icon.showInMoblie ? 'hide-icon' : ''}><button className='icon-btn'><img className={icon.isUserIcon && 'user-icon'} src={icon.srcPath} alt={icon.name} /></button></li>)}
    </ul>
  )
}

