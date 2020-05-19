import React from 'react';
import './main.css';
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Blogs from './Blogs/Blogs'
import {Route,Switch, Redirect} from 'react-router'

function Main() {
  const style = {
    // height: '800px'
    margin: '100px auto'
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/blog/:name" render={(routerProps) => <Blogs {...routerProps}/>} /> */}
      <Route path="/blog" component={Blogs} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>

  );
}

export default Main;
