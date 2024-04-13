import React from 'react';
import './BlogsList.css';

export default function BlogsList({ blogs }) {
  return (
    <ul className='blogs-list'>
      {blogs.map(blog => {
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

