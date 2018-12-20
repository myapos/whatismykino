import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

export const Header = () => <div className="grid_child" id="header"> Header </div>;

export default connect(
  state => state,
  actions
)(Header);
