/* eslint no-sync: 0*/
import * as tf from '@tensorflow/tfjs';

export default async kinos => {
  console.log('kinos received:', kinos);

  const xs = kinos.map(item => item.drawNo);
  const ys = kinos.map(item => item.kino);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 64, inputShape: [1] })); // layer 1

  model.add(tf.layers.dense({ units: 64, inputShape: [64], activation: 'sigmoid' })); // layer 2

  model.add(tf.layers.dense({ units: 64, inputShape: [64], activation: 'sigmoid' })); // layer 3

  model.add(tf.layers.dense({ units: 1, inputShape: [64] })); // output layer
  const optimizer = tf.train.adam(0.2);
  model.compile({ loss: 'meanSquaredError', optimizer }); // compile with params

  // Train the model...and wait for promise to resolve:

  await model.fit(tf.tensor(xs), tf.tensor(ys), { epochs: 500 });

  const prediction = model.predict(tf.tensor(xs[xs.length - 1] + 1, [1, 1])).dataSync();

  console.log('prediction:', prediction);
  return prediction;
};
