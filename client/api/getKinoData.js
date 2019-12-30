import graphql from "graphql-anywhere";

import resolver from "../utils/resolver";
import initialQuery from "../queries/initialQuery";

export default async () => {
  console.log("initializations");
  // keep this for later use with graphql
  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`).then(r => r.json());

  // console.log('res:', res);
  // // debugger;

  // console.log(initialQuery());
  // // Filter the data!
  // const result = graphql(resolver, initialQuery(), res);

  // console.log(result);

  return true;
};
