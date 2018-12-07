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
       const processNasaData = data => {

        console.log('process data', data);
         const nodeId = createNodeId(`nasa-${data.hdurl}`);
         const nodeContent = JSON.stringify(data);

         const nodeData = Object.assign({}, data, {
           id: nodeId,
           parent: null,
           children: [],
           internal: {
             type: `NasaData`,
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
       // // Join apiOptions with the Pixabay API URL
       const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${configOptions.key}`;

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

             console.log(data.copyright);
             //  data.hits.forEach(photo => {
             //    console.log("Photo data is:", photo)
             //  })
             const nodeData = processNasaData(data);
             createNode(nodeData);
           })
       );
     };