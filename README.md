### Whatismykino

This web application aims to provide some tools that we would be useful in data processing for keno game of OPAP
(Greek lottery). Data are being retrieved on demand from OPAP REST API points. Basic usage is that you can enter the specific time frame of the
dates that you want to retrieve kino data and then the values will be ordered due to occurences. Also you can select the number of draws
to be used in the selected time frame.Further more, graphs that are displaying the number of occurences of each number are generated.

For development you should clone the python server from `https://github.com/myapos/whatIsMyKinoPythonServer` and follow the instructions for running the server.

### Commands

- `npm install` to install npm packages
- `npm run dev` to start development server
- `npm run build` to build for production

### Example of Rest API endpoint

- `https://api.opap.gr/draws/v3.0/1100/draw-date/2019-01-01/2019-01-01`

### Auto-Update Version approach

For auto updating version you should give command `git pull`. After that husky hooks are triggered and the command
`"post-merge": "node ./buildVersion.js && git commit -am 'update version' && git push'` is executed. In this command
the script `buildVersion.js` uses versiony package in order to autoupdate the version of UI and `package.json` script.

We followed this approach in the case that someone clones and pulls project and his not one of the developers of the system.
If you do not want to autoupdate the version you should give the command `HUSKY_SKIP_HOOKS=1 git pull`

### Notes

- `https://stackoverflow.com/questions/47272428/template-literals-is-not-working-in-react`
- `https://www.opap.gr/web-services`
- `https://github.com/pallets/flask`
- `https://flask.palletsprojects.com/en/1.1.x/quickstart/`
- `https://stackoverflow.com/questions/16344756/auto-reloading-python-flask-app-upon-code-changes`
- `https://numpy.org/`
- `https://pandas.pydata.org/`
- `https://scikit-learn.org/stable/`
- `https://matplotlib.org/`
- `https://www.kaggle.com/`
- `https://towardsdatascience.com/an-overview-of-time-series-forecasting-models-a2fa7a358fcb`
- `https://towardsdatascience.com/playing-with-time-series-data-in-python-959e2485bff8`
- `https://jakevdp.github.io/PythonDataScienceHandbook/03.11-working-with-time-series.html`
- `https://www.kdnuggets.com/2018/09/end-to-end-project-time-series-analysis-forecasting-python.html`
- `https://machinelearningmastery.com/prepare-univariate-time-series-data-long-short-term-memory-networks/`
- `https://www.machinelearningplus.com/time-series/arima-model-time-series-forecasting-python/`
- `https://www.machinelearningplus.com/time-series/time-series-analysis-python/`
- `https://ucilnica.fri.uni-lj.si/mod/resource/view.php?id=28089` example in python
- `https://facebook.github.io/prophet/docs/quick_start.html` facebook prophet
- `https://pythondata.com/forecasting-time-series-data-with-prophet-part-1/`
- `https://www.opap.gr/en/kino-draw-results`
- `https://gist.github.com/jesperorb/86952f98ed7ea3d1fbfa54824b22eee0` --> heroku deployment
- `https://circleci.com/integrations/heroku/` --> heroku deployment from CircleCI
- `https://circleci.com/docs/2.0/deployment-integrations/#heroku` --> heroku deployment from CircleCI
- `heroku authorizations:create` to create heroku api key
- `heroku apps` to find heroku app name
- `https://stackabuse.com/deploying-a-flask-application-to-heroku/`
- `pip3 freeze > requirements.txt`
- `https://becominghuman.ai/steps-to-create-and-deploy-python-web-app-on-heroku-95b6c4f570b0`

### Issues

1. Deploy python server to heroku
