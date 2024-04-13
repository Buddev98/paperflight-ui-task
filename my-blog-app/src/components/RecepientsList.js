import React from 'react';
import IconsList from './IconsList';

import './RecepientsList.css';

export default function RecepientsList({ userOptions }) {
  return (
    <ul className='recepients-list'>
      {userOptions.map(user => (
        <li className='recepients-list-item'>
          <div>
            <img src={user.srcPath} alt={user.imgName} />
            <span className='medium-font'>{user.userName}</span>
            <span className='small-font'>{user.lastViewed}</span>
          </div>
          <div className='recepients-options'>
            <span className='small-font'>{user.timeValue}</span>
            <IconsList icons={user.options} />
            <button className='location-btn'>
              <img src='/icons/location.svg' alt='location-icon' />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

