import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Section from './Section';
import * as constants from '../../constants';
// import Options from './Options';

const Content = () =>
  <div>
    Content
    {/* <Section header="test" /> */}
  </div>;

export default connect(state => state, actions)(Content);
