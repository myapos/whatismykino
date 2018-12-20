import React from 'react';
import { connect } from 'react-redux';
import * as constants from '../../constants';
import * as actions from '../../store/actions';

const handleScroll = e => {
  const clickedElement = e.target.innerText;
  const goTo = document.getElementById(constants.mapGoToElement[clickedElement]);
  // get dimensions

  const dim = goTo.getBoundingClientRect();

  // scroll to Element

  window.scrollBy({
    top: dim.top, // could be negative value
    left: dim.left,
    behavior: 'smooth',
  });
};
export const Nav = () => <div id="nav">
  <ul>
    <li onClick={e => handleScroll(e)} ><a href="#">Introduction</a> </li>
    <li onClick={e => handleScroll(e)} ><a href="#">Graphs</a> </li>
    <li onClick={e => handleScroll(e)} ><a href="#">Links</a> </li>
    <li onClick={e => handleScroll(e)} ><a href="#">About</a> </li>
  </ul>
</div>;

export default connect(state => state, actions)(Nav);
