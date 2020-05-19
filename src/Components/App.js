import React, { useState, useEffect } from 'react';
import TopNav from './TopNav/TopNav'
// import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


function App() {
  const [width, setWindowWidth] = useState(0);
  
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showTopNavMenu: width > 1023
  };

  console.log('App - width', width);
  return (
    <>
    <div className="container">
      <TopNav />
      {/* <Header width={width} showTopNavMenu={responsive.showTopNavMenu} /> */}
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
