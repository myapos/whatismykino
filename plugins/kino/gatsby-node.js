const fetch = require("node-fetch");
const queryString = require("query-string");

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  // Helper function that processes a photo to match Gatsby's node structure
  const processKinoData = data => {
    // console.log("process data", data);
    const nodeId = createNodeId(`kino`);
    const nodeContent = JSON.stringify(data);

    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `KinoData`,
        content: nodeContent,
        contentDigest: createContentDigest(data)
      }
    });

    return nodeData;
  };

  // plugin code goes here...
  console.log("Testing my plugin", configOptions);
  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions);
  // // Join apiOptions with the OPAP API URL
  const apiUrl = `https://api.opap.gr/draws/v3.0/1100/draw-date/2018-12-01/2018-12-01`;

  console.log("apiUrl:", apiUrl);
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        // For each query result (or 'hit')
        const nodeData = processKinoData(data);
        createNode(nodeData);
      })
  );
};