import React, {useState, useEffect} from "react";
import './TopNav.css'
import TopNavItems from './TopNavItems'
import TopNavBrand from './TopNavBrand'


function TopNav(props) {
  const [scroll, setScroll] = useState(0)
  const [activeScroll, setActiveScroll] = useState(false)

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = e => {
    console.log('window.scrollY', window.scrollY)
    setActiveScroll(window.scrollY > 180 ? true : false)
    // let element = e.target
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   // do something at end of scroll
    // }
  }

  console.log('activeScroll', activeScroll)
  return (
    <section 
      className={`header-nav-area ${activeScroll ? 'active_scroll' : ''}`}
    >
      {/* <TopNavBrand /> */}
      <TopNavItems {...props} activeScroll={activeScroll ? 'active_scroll' : ''}/> 
      {/* Alternate solution to show/hide those elements */}
      {/* {props.styles.showTopNavMenu ? 
        <TopNavItems /> : 
        <span className="menu-icon" /> 
      } */}
    </section>
  );
}

export default TopNav;
