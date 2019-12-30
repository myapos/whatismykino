const versiony = require("versiony");

versiony
  // .major() // will cause the major version to be bumped by 1
  // .minor() // will cause the minor version to be bumped by 1
  .patch() // will cause the patch version to be bumped by 1
  .from("version.json") // read the version from version.json
  .to() // write the version to the source file (package.json)
  // with the minor part bumped by 1
  .to("package.json") // apply the same version
  .end();
