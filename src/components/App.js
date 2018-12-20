import React, { Component } from 'react';

import Content from './presentational/Content';
import Footer from './presentational/Footer';
import Nav from './presentational/Nav';
import Header from './presentational/Header';
import PropTypes from 'prop-types';
import '../css/css.styl';

// https://api.opap.gr/draws/v3.0/1100/draw-date/2018-12-05/2018-12-05

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render () {
    console.log('render:', this.state);
    return <div id="wrapper">
      <Header />
      <div className="grid_child" id="content">
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>;
  }
}

App.propTypes = {
};

export default App;
