/* eslint no-sync: 0*/
import * as tf from '@tensorflow/tfjs';
import forecast from 'nostradamus';

export default async kinos => {
  console.log('kinos received:', kinos);
  // export only kinos
  const onlyKinos = kinos.map(item => item.kino);
  // debugger;
  const data = [
    362, 385, 432, 341, 382, 409,
    498, 387, 473, 513, 582, 474,
    544, 582, 681, 557, 628, 707,
    773, 592, 627, 725, 854, 661,
  ];
  const alpha = 0.2; // overall smoothing component
  const beta = 0.2; // trend smoothing component
  const gamma = 0.2; // seasonal smoothing component
  const period = 4;// # of observations per season
  const m = 1; // # of future observations to forecast
  let prediction = [];

  try {
    // prediction = forecast(data, alpha, beta, gamma, period, m);
    prediction = forecast(onlyKinos, alpha, beta, gamma, period, m);
    console.log(prediction);
    debugger;
  } catch (e) {
    console.log('error:', e);
  }

  return ({
    prediction,
    bestfit: prediction,
  });
};
