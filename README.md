### Whatismykino

This web application aims to provide some tools that we would be useful in data processing for keno game of OPAP
(Greek lottery). Data are being retrieved on demand from OPAP REST API points. Basic usage is that you can enter the specific time frame of the
dates that you want to retrieve kino data and then the values will be ordered due to occurences. Also you can select the number of draws
to be used in the selected time frame.Further more, graphs that are displaying the number of occurences of each number are generated.

### Commands

- `npm install` to install npm packages
- `npm run startDev` to start development server
- `npm run server` to start express proxy server

### Example of Rest API endpoint

- `https://api.opap.gr/draws/v3.0/1100/draw-date/2019-01-01/2019-01-01`

* Info: `https://www.opap.gr/web-services`

### Auto-Update Version approach

For auto updating version you should give command `git pull`. After that husky hooks are triggered and the command
`"post-merge": "node ./buildVersion.js && git commit -am 'update version' && git push'` is executed. In this command
the script `buildVersion.js` uses versiony package in order to autoupdate the version of UI and `package.json` script.

We followed this approach in the case that someone clones and pulls project and his not one of the developers of the system.
If you do not want to autoupdate the version you should give the command `HUSKY_SKIP_HOOKS=1 git pull`

### Notes

- `https://stackoverflow.com/questions/47272428/template-literals-is-not-working-in-react`
- `https://www.opap.gr/web-services`
