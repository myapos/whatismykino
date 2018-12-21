import React from 'react';
import { connect } from 'react-redux';
import logo from '../../../logos/logo_5.png';
import * as actions from '../../store/actions';

export const Header = () => <div id="header">
  <a href=".">
    <img
      id="logo"
      src={logo}
      alt="what is my kino logo" />
  </a>
</div>;

export default connect(
  state => state,
  actions
)(Header);
