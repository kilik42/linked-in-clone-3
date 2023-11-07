import React from 'react'

import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
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
           

            </div>
    </div>
  )
}

export default Header
