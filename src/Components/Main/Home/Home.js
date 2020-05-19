import React from 'react';
import './home.css';
import Header from '../Header/Header'
import {Link} from 'react-router-dom';

function Home() {
  const style = {
    // height: '800px'
    margin: '100px auto'
  };


  return (
    <>
    <Header />
    <main style={style}>
      <div className="blog-section-header">
        OUR LATEST ARTICLES, ADVICE & ADVENTURES
      </div>
      <section className="blog">
        <article className="blog-article">
          <img
            src="https://res.cloudinary.com/jkeohan/image/upload/v1589148433/trading.jpg"
            alt=""
            className="blog-image"
          />
          <h3 className="blog-title">Day Trading - Lessons Learned</h3>
          <p className="blog-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
            fuga nemo aspernatur ullam inventore sit mollitia, excepturi, libero
            totam non beatae voluptate amet facere iure debitis aperiam
            temporibus eveniet...
          </p>
          <p className="blog-read-more"><Link to="/blog/day-trading-lessons-learned">Read More</Link></p>
        </article>
        <article className="blog-article">
          <img
            src="https://image.isu.pub/160502170023-72c3f7dd3d2bd27d90ce480d734a2bce/jpg/page_1.jpg"
            alt=""
            className="blog-image"
          />
          <h3 className="blog-title">Joining The SFM Community</h3>
          <p className="blog-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
            fuga nemo aspernatur ullam inventore sit mollitia, excepturi, libero
            totam non beatae voluptate amet facere iure debitis aperiam
            temporibus eveniet...
          </p>
          <p className="blog-read-more"><Link to="/blog/joining-sfm">Read More</Link></p>
        </article>
        <article className="blog-article">
          <img
            src="https://res.cloudinary.com/jkeohan/image/upload/v1589281600/blog-instagram-class.png"
            alt=""
            className="blog-image"
          />
          <h3 className="blog-title">SkillShare Your Knowledge</h3>
          <p className="blog-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id
            fuga nemo aspernatur ullam inventore sit mollitia, excepturi, libero
            totam non beatae voluptate amet facere iure debitis aperiam
            temporibus eveniet...
          </p>
          <p className="blog-read-more">Read More</p>
        </article>
      </section>
    </main>
    </>
  );
}

export default Home;
