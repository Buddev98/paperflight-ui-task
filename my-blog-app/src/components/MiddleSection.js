import React, { useState } from 'react';
import './MiddleSection.css';
import BlogsList from './BlogsList';

export default function MiddleSection({ data }) {
  const [active, setActive] = useState();
  const filterOptions = [
    { id: 1, filterName: 'Created Date'},
    { id: 2, filterName: 'Last Activity'},
    { id: 3, filterName: 'Time Spent'},
  ];

  return (
    <>
      <div className='search-section'>
        <div>
          <h1>conversations</h1>
          <p className='medium-black'>track user engagement</p>
        </div>
        <img src='/icons/more.svg' />
      </div>
      <div className='search-icon'>
        <img src='/icons/search.svg' alt='search' />
        <input className='search-box' placeholder='search by conversations and contacts' type="search" id="gsearch" name="gsearch" />      
      </div>
      <div className='filter-options'>
        <span className='small-black-10'>Sort by:</span>
        {filterOptions.map(option => <button onClick={() => setActive(option.id)} className={`small-black-10 ${active === option.id ? 'active': ''}`} key={option.id}>{option.filterName}</button>)}
      </div>
      <BlogsList blogs={data.blogs} />
    </>
  )
}

