import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Scatter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  render () {
    return (<div> hello from scatter</div>);
  }
}

export default connect(state => state, actions)(Scatter);
