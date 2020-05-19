import React from 'react';
import './blogs.css';
import SingleInfoBlurb from '../Header/InfoBlurb/SingleInfoBlurb';
import DayTrading from './BlogArticles/DayTrading/DayTrading'
import BlogHomePage from './BlogHomePage'
import JoiningSFM from './BlogArticles/SFM/JoiningSFM'
import { Link, Route, Switch } from 'react-router-dom';

function Blogs(props) {
  console.log('Blogs', props)
  return (
       <Switch>
        <Route path={`/blog/day-trading-lessons-learned`} component={DayTrading} />
        <Route path={`/blog/joining-sfm`} component={JoiningSFM} />
        <Route exact path={`/blog`} component={BlogHomePage} />
      </Switch>
  );
}

export default Blogs;
