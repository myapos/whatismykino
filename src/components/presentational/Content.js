import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Section from './Section';
import * as constants from '../../constants';
import Options from '../container/Options';

const Content = () =>
  <div id="section_wrapper">
    <Section text={constants.intro} />
    <Options />
    <Section text="test1" />
    <Section text="test2" />
  </div>;

export default connect(state => state, actions)(Content);
