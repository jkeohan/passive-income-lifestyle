import React from 'react';
import './daytrading-lessonslearned.css';
import SingleInfoBlurb from '../../../Header/InfoBlurb/SingleInfoBlurb';
import '../../blogs.css';

function DayTrading() {
  let style = {
    backgroundImage:
      'url(https://res.cloudinary.com/jkeohan/image/upload/v1589148433/trading.jpg)'
  };
  return (
    <section className="blog">
      <header style={style}>
        <SingleInfoBlurb title="DAY TRADING FOR NEWBIES" />
        <div className="gradient_container_top" />
      </header>
      <section className="blog-main">
        <article className="blog-article">
          <h3>The Day Trading Reality<i className="far fa-heart fa-2x"></i></h3>
          <p>
            Day trading sounds cool right? I mean who doesn’t want to make “boo
            koo” buck with only a few hours, or even minutes of work? I
            certainly do, and I made it a point to jump right in. I watched a
            few YouTube videos and thought I was ready to rock and roll.
            Needless to say, boy was I wrong. When I should have sold one day
            and made $600+ profit, I remained greedy hoping for another spike
            and wound up only making $40. On other trades I ignored what I
            learned about “high probability setups” and would lose $100+ in a
            matter of minutes. On top of all that, the stress of watching the
            stock market rise and fall on a whim started to mentally and
            physically take its toll. I started to ignore my health, my work
            priorities, and most importantly my relationship. I came to the
            stark realization that I need to slow it all down and set aside time
            everyday to learn. I also felt it was important for me to find a
            community to support me at this stage of my venture. Here is what I
            did to turn it all around:
          </p>

          <h3>Learn To Be Patient</h3>
          <p>
            This should be the first rule in bold and in the largest font
            possible in the learning to day trade manual. I can’t stress enough
            how crucial patience is for those that want to day trade. All too
            often I found myself ready to buy then I’d panic and sell and then
            panic some more as I watched the stock rise.
            Buy...Sell...Sell...Buy...ahhh! Then I opted to hold when I was in
            the red hoping it would go up in the next day or two. That rarely
            paid off as I would panic again and sell days just before the stock
            popped. Those few weeks were entirely stressful and I was an
            emotional rollercoaster. It was completely demoralizing and I felt
            like a failure. All until I learned to be patient.
          </p>
          <p>
            Now I meditate first thing in the morning for no less than 30min and
            go for a jog. I also only watch the market for the first 30min and
            get a feel of where the market is going. I observed the stocks on my
            watch-list and looked for the high probability setups. If I feel
            things will work in my favor then I buy and immediately put in an
            order to sell at a target price below what I purchased so that I
            never get burned. Losing $10 is a lesson however losing $100 is me
            making a bad decision.
          </p>

          <h3>Get Your “Training” On</h3>
          <p>My first attempt at training was watching the youtube playlist “Learn To Day Trade - Beginners Guide” put together by Investors Underground.  That was where I first learned about “High Probability Setups” and the “ABCD Long” pattern.  It also provided advice on what trading platforms to use as well as how to short stocks.  There were 8 videos in the series and it was quite informative.  
</p>

<p>
I also watched a few YouTube videos from TradingLearning101. I’m going to continue watching the channel as the author seems truly interested in teaching the concepts of trading as well as providing useful advice like “be patient”.  In one video he stated how he made $250 on a stock that day and walked away stating that it was a good day.  Also he makes it a point to not trade in the first 30-45mins of the trading day and never on Fridays.  This advice shows real constraint and a level of patience that everyone should internalize when trading. </p>

<p>
I’m in the process of deciding which Udemy course to take on day trading and will write a follow up blog on that in the coming weeks.  
</p>

<h3>Find Mentors</h3>
          <p>
I decided to sign up for the monthly subscription at Investors Underground and have learned so much in just a few short weeks. Its well worth the money to be part of a group where you can be advised what stock to put on your watch list as well as channel broadcasts indicating where everyone sees the trend going.  I compare this type of training to when students sign up to take the Software Engineering Immersive at General Assembly which I’ve taught for the last 4 years.  It’s a 3 month intense, immersive program that pushes people to their limits.  What we teach is available for free or for a discounted price on the web but students choose to pay $15K to learn in a structured setting from those that can guide them along their journey.  I myself took the course back in 2014 and did so for just that reason.  So making that choice this time around seemed the  logical approach.  In the end you are who you surround yourself with and I wanted to be around those who were already successful and learn from their success. 
</p>
        </article>
      </section>
    </section>
  );
}

export default DayTrading;
