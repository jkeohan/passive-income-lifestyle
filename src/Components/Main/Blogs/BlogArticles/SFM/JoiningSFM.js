import React from 'react';
import './styles.css';
import SingleInfoBlurb from '../../../Header/InfoBlurb/SingleInfoBlurb';
import '../../blogs.css';

function JoiningSFM() {
  let style = {
    backgroundImage:'url(https://image.isu.pub/160502170023-72c3f7dd3d2bd27d90ce480d734a2bce/jpg/page_1.jpg)'
  };
  return (
    <section className="blog">
      <header style={style}>
        <SingleInfoBlurb title="JOINING THE SFM COMMUNITY" />
        <div class="gradient_container_top" />
      </header>
      <section className="blog-main">
        <article className="blog-article" />
      </section>
    </section>
  );
}

export default JoiningSFM;
