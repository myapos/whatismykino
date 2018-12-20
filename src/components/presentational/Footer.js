import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

export const Footer = () => <div className="grid_child" id="footer"> Footer</div>;
export default connect(
  state => state,
  actions
)(Footer);
