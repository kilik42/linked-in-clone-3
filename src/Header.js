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
      {/* <h2>this is the header</h2> */}

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
              <HeaderOption avatar="https://scontent-ord5-1.xx.fbcdn.net/v/t31.18172-8/615275_4413955460297_1988286950_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=bOMYqGvG24wAX_i6WVa&_nc_ht=scontent-ord5-1.xx&oh=00_AfBmU7mvNNhEPneReKFPhdCKyJtUx9Usg7z2Ne2ZIkH2xw&oe=65757357" title="me"/>
              
            </div>
    </div>
  )
}

export default Header
