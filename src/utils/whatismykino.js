import * as tf from '@tensorflow/tfjs';

export default kinos => {
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

  // Train the model...then:
  model.fit(tf.tensor(xs), tf.tensor(ys), { epochs: 500 }).then(() => {
    const prediction = model.predict(tf.tensor(xs[xs.length - 1] + 1, [1, 1])).dataSync();

    console.log('prediction:', prediction);
  });
  // const linearModel = tf.sequential();

  // const trainModel = async (xs, ys) => {
  //   const layers = tf.layers.dense({
  //     units: 1,
  //     inputShape: [1],
  //   });
  //   const lossAndOptimizer = {
  //     loss: 'meanSquaredError',
  //     optimizer: 'sgd',
  //   };

  //   // this.linearModel = tf.sequential();
  //   linearModel.add(layers);
  //   linearModel.compile(lossAndOptimizer);

  //   await linearModel.fit(
  //     tf.tensor1d(xs),
  //     tf.tensor1d(ys),
  //     {
  //       epochs: 1500,
  //     }
  //   );
  // };

  // const predict = value => Array.from(
  //   linearModel
  //     .predict(tf.tensor2d([value], [1, 1]))
  //     .dataSync()
  // );
  // const xs = [1, 2, 3, 4, 5];
  // const ys = [2, 4, 6, 8, 10];

  // trainModel(xs, ys).then(val => {
  //   // debugger;
  //   console.log(val);
  //   const res = predict(6);
  //   console.log(res);
  // });

  // const model = tf.sequential();
  // model.add(tf.layers.dense({ units: 128, inputShape: [1] })); // layer 1
  // model.add(tf.layers.dense({ units: 128, inputShape: [128], activation: 'sigmoid' })); // layer 2
  // model.add(tf.layers.dense({ units: 1, inputShape: [128] })); // output layer
  // model.compile({ loss: 'meanSquaredError', optimizer: 'adam' }); // compile with params

  // // Train the model...then:
  // model.fit(tf.tensor(xs), tf.tensor(ys), { epochs: 150 }.then(() => {
  //   bestfit = model.predict(tf.tensor(xs, [xs.length, 1])).dataSync();
  // }));
  // console.log('wait for training...');
  // debugger;
  // const model = tf.sequential();

  // model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // model.add(tf.layers.dense({ units: 64, inputShape: [1] }));

  // model.add(tf.layers.dense({ units: 1, inputShape: [64] })); // output

  // model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  // model.fit(xs, ys, { epochs: 150 });

  // const results = model.predict(tf.tensor2d([7], [1, 1])).dataSync();

  // console.log('results: ', results);
};
