import React from 'react';
import './MiddleSection.css';
import BlogsList from './BlogsList';

export default function MiddleSection() {
  return (
    <>
      <div className='search-section'>
        <div>
          <h1>conversations</h1>
          <p>track user engagement</p>
        </div>
        <img src='/icons/more.svg' />
      </div>
      <input className='search-box' placeholder='search by conversations and contacts' type="search" id="gsearch" name="gsearch" />
      <BlogsList />
    </>
  )
}

