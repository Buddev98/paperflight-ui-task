import React, { useState } from 'react';
import './BlogsList.css';

export default function BlogsList({ blogs }) {
  const [active, setActive] = useState();
  return (
    <ul className='blogs-list'>
      {blogs.map(blog => {
        const { title, id, sharedBy, sharedTime, srcPath, imgName } = blog;
        return (
          <li key={id} onClick={() => setActive(id)}>
            <img src={srcPath} alt={imgName} />
            <div className='details-section'>
              <h3 className={`${active === id ? 'active' : ''}`}>{title}</h3>
              <p className='medium-gray-12'>{sharedTime}</p>
              <p className='light-gray-12'>{sharedBy}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

