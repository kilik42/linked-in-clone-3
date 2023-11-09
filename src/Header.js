import React from 'react'

import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
      <h2>this is the header</h2>

      <div className="header__left">
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />

        <div className="header__search">
          {/* SearchIcon */}
            <SearchIcon />
          <input type="text" />
        </div>
      </div>

        <div className="header__right">
           
              <HeaderOption Icon={HomeIcon} title="home"/>
              <HeaderOption Icon ={SupervisorAccountIcon}title ='My Network'/>
              <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
              <HeaderOption Icon ={ChatIcon} title="Messaging"/>
              <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            </div>
    </div>
  )
}

export default Header
