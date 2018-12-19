import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

export const Nav = () => <div id="nav"> 
<ul>
    <li><a href="#">Introduction</a> </li>
    <li><a href="#">First Section</a> </li>
    <li><a href="#">Second Section</a> </li>
    <li><a href="#">Third Section</a> </li>
</ul>
</div>;

export default connect(state => state,actions)(Nav);