import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Section from "./Section";
import * as constants from "../../constants";
import Options from "../container/Options";

const Content = () => (
  <div id="section_wrapper">
    <Section
      subtitle={constants.intro_subtitle}
      text={constants.intro_msg}
      link={constants.intro_link}
    />

    <Section subtitle={constants.graphs_subtitle} text={constants.graphs_msg}>
      <Options />
    </Section>
    {/* <Section
      subtitle={constants.links_subtitle}
      text={constants.links_msg}
      section_footer={constants.links_section_footer}
    />
    <Section
      subtitle={constants.about_subtitle}
      text={constants.about_msg}
      section_footer={constants.about_section_footer}
    /> */}
  </div>
);

export default connect(state => state, actions)(Content);
