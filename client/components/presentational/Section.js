import React from "react";

const scrollToTop = e => {
  const goTo = document.getElementById("header");
  // get dimensions

  const dim = goTo.getBoundingClientRect();
  // scroll to Top

  window.scrollBy({
    top: dim.top, // could be negative value
    left: dim.left,
    behavior: "smooth"
  });
};

const Section = props => {
  // console.log("props", props);
  console.log("");
  return (
    <div className="section" id={props.id}>
      <div className="subtitle">{props.subtitle ? props.subtitle : null}</div>
      <div className="msg">
        {props.text ? props.text : null}
        {props.children ? props.children : null}
      </div>
      {props.links ? (
        <ul className="linksContainer">
          {props.links.map(link => (
            <li key={link.id}>
              <a href={link.link} target="_blank">
                {link.descr}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="section_footer">
        {props.section_footer ? props.section_footer : null}
        <span className="top" onClick={e => scrollToTop(e)}>
          {" "}
          Top{" "}
        </span>
      </div>
    </div>
  );
};

export default Section;
