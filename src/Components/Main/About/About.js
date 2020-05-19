import React from 'react';
import './about.css';
import SingleInfoBlurb from '../Header/InfoBlurb/SingleInfoBlurb'


function About() {
  return (
    <>

    <section className="about-us">
    <header>
        <SingleInfoBlurb title='ALL ABOUT JOE, KIA & "KIAKI"'/>
        <div class="gradient_container_top"></div>
      </header>
    <section  className='about-us-main'>
      <h2>About Us</h2>
      <p>
        We are Joe and Kia and we created this site as a way to document and
        connect with other Passive Income Lifestyle seekers and enthusiasts.
      </p>
      <img
        className="aruba"
        src="https://res.cloudinary.com/jkeohan/image/upload/v1589373919/IMG_7577_svolji.jpg"
        alt=""
      />

      <p>
        For years now we both worked in the corporate world. In front of a
        screen or at a desk all day, commuting in and out of the city and
        spending endless time in traffic.
      </p>

      <p>
        We both always wanted a more laid back lifestyle, better work/life
        balance, and opportunities to enjoy life rather than spend it working
        towards retirement that may or may never come.
      </p>

      <p>
        We met in 2016 in NYC and it wasn't before long that we both felt a
        connection neither of us had ever before, as if a greater force had led
        us to each other. Both being happy natured, optimistic, devoted, and
        always grateful for all things, we mirrored each other. Not only in
        character, but we also wanted the same things in our lives and for our
        future. A bigger family, adventure, and a lifestyle that's not rushed,
        less stressful, filled with experiences, and more time with loved ones.
        The conversations we've had on how we can accomplish all this have been
        endless.
      </p>
      <img
        className="greece"
        src="https://res.cloudinary.com/jkeohan/image/upload/v1589373919/happily-ever-after.jpg"
        alt=""
      />
      <p>
        Here, we will share with you our adventures and the platforms we are
        exploring while working towards making our dream of a fully Passive
        Income Lifestyle a reality, and we look forward to hearing all about
        yours!
      </p>

      <p>J & K</p>
      </section>
    </section>
    </>
  );
}

export default About;
