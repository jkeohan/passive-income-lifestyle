import React, { useState, useEffect } from 'react';
// import TopNav from './TopNav/TopNav';
import BulletsNav from './BulletsNav/BulletsNav';
import InfoBlurb from './InfoBlurb/InfoBlurb';
import BottomSlider from './BottomSlider/BottomSlider';
// import '../../css_vars.css';
import './Header.css';

function Header(props) {
  const [activeBullet, setActiveBullet] = useState(0);
  const [imageGallery, setImageGallery] = useState([]);
  const defaultObject = { title: '', description: '', image: '' };
  const initialObject = imageGallery.length
    ? imageGallery[0].image
    : 'https://res.cloudinary.com/jkeohan/image/upload/v1589144566/5F8E9914-E3C1-4D97-ADD9-76C5CF8CF96F-5665-00000516E68D0DE5_wwwd0f.jpg';
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  // https://res.cloudinary.com/jkeohan/image/upload/v1589402391/navagio_1_hy7eg1.jpg
  // const sharedDoc = 'https://docs.google.com/spreadsheets/d/1vaLjOuDB7iE9yv4lA3wGqPjV6vA8z6WcetuTerUiGR4/edit?usp=sharing'
  const formatImageGalleryData = obj => {
    return {
      preTitle: obj.gsx$pretitle.$t,
      title: obj.gsx$title.$t,
      description: obj.gsx$description.$t,
      image: obj.gsx$image.$t,
      left: obj.gsx$left.$t
    };
  };

  const handleClick = id => {
    setActiveBullet(id);
  };

  useEffect(() => {
    const id = '1vaLjOuDB7iE9yv4lA3wGqPjV6vA8z6WcetuTerUiGR4';
    const jsonDataUrl = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;
    let makeAPICall = async () => {
      const data = await fetch(jsonDataUrl);
      const imageGalleryItems = await data.json();
      const imageGalleryArr = imageGalleryItems.feed.entry.map(d =>
        formatImageGalleryData(d)
      );
      setImageGallery(imageGalleryArr);
    };
    makeAPICall();
  }, []);

  useEffect(() => {}, [activeBullet]);

  const lazyLoadBackgroundImages = () => {
    return imageGallery.map((d, i) => {
      return (
        <div
          key={i}
          style={{ background: `url(${d.image})`, display: 'none' }}
        />
      );
    });
  };

  const style = {
    backgroundImage: `url(https://res.cloudinary.com/jkeohan/image/upload/v1589402391/navagio_1_hy7eg1.jpg)`,
    transition: `background-image .5s ease-in-out`
  };

  return (
    <header style={style}>
      {lazyLoadBackgroundImages()}
      <div className="gradient_container_top" />
      {/* <div className="gradient_container_bottom" /> */}
      <InfoBlurb />
      {/* <TopNav {...props} setHamburgerActive={setHamburgerActive} /> */}
      {/* {imageGallery.length ? (
        <InfoBlurb activeBullet={imageGallery[activeBullet]} />
      ) : (
        <InfoBlurb activeBullet={initialObject[activeBullet]} />
      )} */}

      {/* <BulletsNav  activeBullet={activeBullet} imageGallery={imageGallery} onClick={handleClick}/> */}

      {/* <BottomSlider {...props} isHamburgerActive={isHamburgerActive}/>
        <section className="more_bar">
          <div className="title">
            MORE
          </div>
          <div className="arrow_down"></div>
        </section> */}
    </header>
  );
}

export default Header;


  // backgroundImage: `url(https://res.cloudinary.com/jkeohan/image/upload/v1589146548/max-van-den-oetelaar-QI76OafqTiA-unsplash_qgca4r.jpg)`,
// https://res.cloudinary.com/jkeohan/image/upload/v1589153244/Screen_Shot_2020-05-10_at_7.27.05_PM_hblze0.png