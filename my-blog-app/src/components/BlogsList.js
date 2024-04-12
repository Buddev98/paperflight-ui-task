import React from 'react';
import data from './LeftNavigationData.json';
import './BlogsList.css';

export default function BlogsList() {
  return (
    <ul className='blogs-list'>
      {data.blogs.map(blog => {
        const { title, sharedBy, sharedTime, srcPath, imgName } = blog;
        return (
          <li key={title}>
            <img src={srcPath} alt={imgName} />
            <div className='details-section'>
              <h3>{title}</h3>
              <p>{sharedTime}</p>
              <p>{sharedBy}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

