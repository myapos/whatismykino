import React from 'react';
import logo from '../../../logos/logo_5.png';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

export const Header = () => <div className="grid_child" id="header">
  <a href=".">
    <img
      src={logo}
      alt="what is my kino logo"
      width="100"
      height="100" />
  </a>
</div>;

export default connect(
  state => state,
  actions
)(Header);
