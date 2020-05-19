import React, { useState, useEffect } from 'react';
import './TopNavItems.css';
import { NavLink, Link } from 'react-router-dom';

function TopNavItems({ showTopNavMenu, setHamburgerActive, activeScroll }) {
  const [showHamburger, setShowHamburger] = useState(true);

  const menuItemsLeft = ['Home', 'Blog'];
  const menuItemsRight = ['About', 'Contact'];

  const navMenuItemsLeft = menuItemsLeft.map((d, i) => {
    let name = d == 'Home' ? '/' : `/${d.toLowerCase()}`;
    return (
      <li key={i}>
        <Link
          to={`${name}`}
          key={i}
          className="nav-element"
          // activeClassName="active"
        >
          {d}
        </Link>
        <div className="gradient_line" />
      </li>
    );
  });

  const navMenuItemsRight = menuItemsRight.map((d, i) => {
    let name = d == 'Home' ? '/' : d.toLowerCase();

    return (
      <li key={i}>
        <Link
          to={`/${name}`}
          key={i}
          className="nav-element"
          // activeClassName="active"
        >
          {d}
        </Link>
        <div className="gradient_line" />
      </li>
    );
  });

  const handleMenuIconClick = () => {
    console.log('clicked');
    setShowHamburger(!showHamburger);
    setHamburgerActive(showHamburger);
    showHamburger
      ? (document.getElementById('root').style.overflow = 'hidden')
      : (document.getElementById('root').style.overflow = 'visible');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const menuIconClass = showHamburger ? '' : 'menu_icon-close';
  const showNavMenu = showHamburger ? '' : 'show';

  return (
    <>
      <div id="nav_container" className={`${showNavMenu}`}>
        <nav id="navigation">
          <ul>
            {navMenuItemsLeft}
            <li>
              <a href="#" className="nav-element">
                     <img
                  className={`logo ${activeScroll}`}
                  alt="log"
                  src="https://res.cloudinary.com/jkeohan/image/upload/v1589796605/site-logo.png"
                />
              </a>
              <div className="gradient_line" />
            </li>
            {navMenuItemsRight}
          </ul>
        </nav>
      </div>
      <span
        onClick={handleMenuIconClick}
        className={`menu-icon ${menuIconClass}`}
      />
    </>
  );
}

export default TopNavItems;
