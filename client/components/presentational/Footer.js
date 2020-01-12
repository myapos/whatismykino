import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

export const Footer = () => (
  <div id="footer">
    <div className="footer_container">
      <div
        onClick={() => window.open("https://www.facebook.com/myapos")}
        className="clickable"
      >
        {" "}
        <div id="facebook" />{" "}
      </div>
      <div
        onClick={() => window.open("https://twitter.com/myapost")}
        className="clickable"
        id="twitter"
      />
      <div
        onClick={() => window.open("https://www.linkedin.com/in/myapos/")}
        className="clickable"
        id="linkedin"
      />
      <div
        onClick={() => window.open("https://www.github.com/myapos")}
        className="clickable"
        id="github"
      />
    </div>
    <div className="coder">
      Coded with <span id="heart" /> by{" "}
      <a id="mailToCoder" href="mailto:myapos@gmail.com">
        {" "}
        Myron Apostolakis{" "}
      </a>
    </div>
    <div className="coder copyright">Copyright @2018. All rights reserved</div>
  </div>
);
export default connect(state => state, actions)(Footer);
