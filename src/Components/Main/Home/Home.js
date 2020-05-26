import React from 'react';
import './home.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
// https://www.npmjs.com/package/react-cookie-consent
import CookieConsent, { Cookies } from 'react-cookie-consent';

function Home() {
  const cookieConsentStyle = {
    background: 'rgba(155,155,155,1)',
    color: 'black',
    bottom: '10px',
    padding: '10px',
    'justify-content': 'center'
  };

  return (
    <>
      <Header />
      <main>
        <div className="blog-section-header">
          OUR LATEST ARTICLES, ADVICE & ADVENTURES
        </div>
        <section className="blog">
          <article className="blog-article">
            <div className="blog-article-img">
              <img
                src="https://res.cloudinary.com/jkeohan/image/upload/v1589148433/trading.jpg"
                alt=""
                className="blog-image"
              />
            </div>

            <h3 className="blog-title">Day Trading - Lessons Learned</h3>
            <p className="blog-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              id fuga nemo aspernatur ullam inventore sit mollitia, excepturi,
              libero totam non beatae voluptate amet facere iure debitis aperiam
              temporibus eveniet...
            </p>
            <p className="blog-read-more">
              <Link to="/blog/day-trading-lessons-learned">Read More</Link>
            </p>
          </article>
          <article className="blog-article">
            <div className="blog-article-img">
              <img
                src="https://image.isu.pub/160502170023-72c3f7dd3d2bd27d90ce480d734a2bce/jpg/page_1.jpg"
                alt=""
                className="blog-image"
              />
            </div>
            <h3 className="blog-title">Joining The SFM Community</h3>
            <p className="blog-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              id fuga nemo aspernatur ullam inventore sit mollitia, excepturi,
              libero totam non beatae voluptate amet facere iure debitis aperiam
              temporibus eveniet...
            </p>
            <p className="blog-read-more">
              <Link to="/blog/joining-sfm">Read More</Link>
            </p>
          </article>
          <article className="blog-article">
            <div className="blog-article-img">
              <img
                src="https://res.cloudinary.com/jkeohan/image/upload/v1589281600/blog-instagram-class.png"
                alt=""
                className="blog-image"
              />
            </div>
            <h3 className="blog-title">SkillShare Your Knowledge</h3>
            <p className="blog-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              id fuga nemo aspernatur ullam inventore sit mollitia, excepturi,
              libero totam non beatae voluptate amet facere iure debitis aperiam
              temporibus eveniet...
            </p>
            <p className="blog-read-more">Read More</p>
          </article>
        </section>
      </main>
      <CookieConsent style={cookieConsentStyle}>
        <span style={{ color: 'white' }}>
          This website uses cookies to enhance the user experience.
        </span>
      </CookieConsent>
    </>
  );
}

export default Home;
