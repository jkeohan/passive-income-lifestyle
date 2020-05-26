import React from 'react';
import './topNavMobile.css';
import {Link} from 'react-router-dom'

function TopNavMobile() {
  return (
    <>
    <nav className='header-nav-area_mobile'>
      <div className='logo_mobile'>
        <Link to='/'>
          <img
            className='logo'
            alt="logo"
            src="https://res.cloudinary.com/jkeohan/image/upload/v1589796605/site-logo.png"
          />
        </Link>
      </div>
      <span
        className='menu-icon'
        // onClick={handleMenuIconClick} 
      />
    </nav>
    </>
  );
}

export default TopNavMobile;
