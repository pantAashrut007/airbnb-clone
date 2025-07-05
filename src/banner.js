import React, { useState } from 'react'
import './styles/banner.css';
import { Button } from '@mui/material';
import Search from './search';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
        <div className='banner_search'>
          
          <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>Search Dates</Button>
          {showSearch && <Search />}
        </div>
        <div className='banner_info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan your gateaway to uncover different kind of hidden gems near you.</h5>
            <Button variant='outlined' color='white'>Explore Nearby</Button>
        </div>

    </div>
  )
}

export default Banner
