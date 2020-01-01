# whatismykino

# commands

- `yarn start` to start development server
- `yarn server` to start express proxy server

# Example of Rest API endpoint

- `https://api.opap.gr/draws/v3.0/1100/draw-date/2019-01-01/2019-01-01`

* Info: `https://www.opap.gr/web-services`

### Auto-Update Version approach

For auto updating version you should give command `git pull`. After that husky hooks are triggered and the command
`"post-merge": "node ./buildVersion.js && git commit -am 'update version' && git push'` is executed. In this command
the script `buildVersion.js` uses versiony package in order to autoupdate the version of UI and `package.json` script.

We followed this approach in the case that someone clones and pulls project and his not one of the developers of the system.
If you do not want to autoupdate the version you should give the command `HUSKY_SKIP_HOOKS=1 git pull`

### Notes

`https://stackoverflow.com/questions/47272428/template-literals-is-not-working-in-react`
