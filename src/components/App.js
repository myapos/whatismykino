import React, { Component } from "react";
import gql from 'graphql-tag';
import graphql from 'graphql-anywhere';
 
import PropTypes from "prop-types";
import '../css/css.styl'

//https://api.opap.gr/draws/v3.0/1100/draw-date/2018-12-05/2018-12-05

// Define a resolver that just returns a property
const resolver = (fieldName, root) => root[fieldName];
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  async componentDidMount () {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`).then(r => r.json());

    console.log(res);

    // Write a query that gets just the fields we want
    const query = gql`
      {
        name,
        abilities,
        game_indices
      }
    `;

    // Filter the data!
    const result = graphql(resolver, query, res);

    console.log(result);
    this.setState({ result });
  }
  render() {

    console.log('render:',this.state);
    return (
      <div id="container">
        Hello World!!!!
    </div>);
  }
}

App.propTypes = {
};

export default App;