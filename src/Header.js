import React from 'react';
import './styles/header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';


export default function Header() {
  return (
    <div className='header'>
      <img 
        className='header_icon' 
        src = "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" 
        alt='Air bnb logo'></img>
        <div className='header_center'>
            <input type='text' ></input>
            <SearchIcon />
        </div>
        <div className='header_right'>
            <p>Become a Host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
    </div>
  )
}
