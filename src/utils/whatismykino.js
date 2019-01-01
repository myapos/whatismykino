/* eslint no-sync: 0*/
// import * as tf from '@tensorflow/tfjs';
import forecast from 'nostradamus';
import timeseries from 'timeseries-analysis';

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

  const alpha = 0.1; // overall smoothing component
  const beta = 0.1; // trend smoothing component
  const gamma = 0.1; // seasonal smoothing component

  const period = 4; // # of observations per season

  const m = 1; // # of future observations to forecast

  while (onlyKinos.length % period > 0) {
  /* shifts elements from the beginning of array
  to achieve perfect division for Holt-Winters algorithm */
    onlyKinos.shift();
  }

  let prediction = [];

  try {
    // prediction = forecast(data, alpha, beta, gamma, period, m);
    prediction = forecast(onlyKinos, alpha, beta, gamma, period, m);
    // console.log(prediction);

    // ignore the elements with zero values
    prediction = prediction.filter(item => item > 0 && !isNaN(item));
  } catch (e) {
    // console.log('error:', e);
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
