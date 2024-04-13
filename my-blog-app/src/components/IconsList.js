import React from 'react';
import './IconsList.css';

export default function IconsList({ icons }) {
  return (
    <ul className='icons-list'>
      {icons.map(icon => <li key={icon.name}><img className={icon.isUserIcon && 'user-icon'} src={icon.srcPath} alt={icon.name} /></li>)}
    </ul>
  )
}

