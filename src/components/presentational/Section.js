import React from 'react';

const scrollToTop = e => {
  const goTo = document.getElementById('header');
  // get dimensions

  const dim = goTo.getBoundingClientRect();
  // scroll to Top

  window.scrollBy({
    top: dim.top, // could be negative value
    left: dim.left,
    behavior: 'smooth',
  });
};

const Section = props => (<div className="section">
  <div className="subtitle" id={props.subtitle}>
    {props.subtitle ? props.subtitle : 'subtitle' }
  </div>
  <div className="msg">
    { props.text ? props.text : 'text' }
    { props.children }
  </div>
  <div className="section_footer">
    {props.section_footer ? props.section_footer : 'section footer'}
    <span className="top" onClick={e => scrollToTop(e)}> Top </span>
  </div>
</div>);

export default Section;
