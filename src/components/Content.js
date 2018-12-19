import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Options from "./Options";

const Content = () => 
<div id="content">
  <Options />
</div>;

export default connect(state => state, actions)(Content);
