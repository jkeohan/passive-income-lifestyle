import React from 'react';
import './singleInfoBlurb.css';

function SingleInfoBlurb(props) {
  return (
    <div className="wrapper" id="single-info_blurb">
      <div className="article">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default SingleInfoBlurb;
