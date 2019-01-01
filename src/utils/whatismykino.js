/* eslint no-sync: 0*/
// import * as tf from '@tensorflow/tfjs';
import forecast from 'nostradamus';
import timeseries from 'timeseries-analysis';
import { setPriority } from 'os';

export default async kinos => {
  console.log('kinos received:', kinos);
  // export only kinos
  const onlyKinos = kinos.map(item => item.kino);
  const formattedKinos = kinos.map(item => {
    // item.kino
    const splitted = item.drawTime.split('T');

    const splittedDate = splitted[0].split('-');
    const splittedTime = splitted[1].split(':');

    const d = new Date(splittedDate[2], splittedDate[1] - 1,
      splittedDate[0], splittedTime[0], splittedTime[1], splittedTime[2]);

    const miniData = [d, item.kino];
    return miniData;
  });
  // debugger;
  // const data = [
  //   362, 385, 432, 341, 382, 409,
  //   498, 387, 473, 513, 582, 474,
  //   544, 582, 681, 557, 628, 707,
  //   773, 592, 627, 725, 854, 661,
  // ];
  const alpha = 0.2; // overall smoothing component
  const beta = 0.2; // trend smoothing component
  const gamma = 0.2; // seasonal smoothing component

  debugger;
  const period = 4;// # of observations per season
  const step = 0.0001;
  while (onlyKinos.length % period > 0) {
    // period = period + step;
    onlyKinos.shift(); // shifts elements from the beginning of array
    // to achieve perfect division for Holt-Winters algorithm
  }
  debugger;
  const m = 1; // # of future observations to forecast
  let prediction = [];

  try {
    // prediction = forecast(data, alpha, beta, gamma, period, m);
    prediction = forecast(onlyKinos, alpha, beta, gamma, period, m);
    console.log(prediction);
  } catch (e) {
    console.log('error:', e);
    alert('error:' + e.message);
  }

  // using time series

  // Load the data
  const t = new timeseries.main(formattedKinos);

  // debugger;
  return ({
    prediction,
    bestfit: prediction,
  });
};
