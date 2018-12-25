import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Histogram extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  render () {
    return (<div> hello from Histogram</div>);
  }
}

export default connect(state => state, actions)(Histogram);
