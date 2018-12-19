import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

export const Nav = () => <div id="nav"> Nav </div>;

export default connect(state => state,actions)(Nav);