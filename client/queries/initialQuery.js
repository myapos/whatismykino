import gql from "graphql-tag";

// Write a query that gets just the fields we want
export default () =>
  gql`
    {
      name
      abilities
      game_indices
    }
  `;
