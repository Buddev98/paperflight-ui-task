import React from 'react';
import './MiddleSection.css';
import BlogsList from './BlogsList';

export default function MiddleSection({ data }) {
  return (
    <>
      <div className='search-section'>
        <div>
          <h1>conversations</h1>
          <p>track user engagement</p>
        </div>
        <img src='/icons/more.svg' />
      </div>
      <div className='search-icon'>
        <img src='/icons/search.svg' alt='search' />
        <input className='search-box' placeholder='search by conversations and contacts' type="search" id="gsearch" name="gsearch" />      
      </div>
      <BlogsList blogs={data.blogs} />
    </>
  )
}

