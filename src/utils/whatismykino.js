/* eslint no-sync: 0*/
import * as tf from '@tensorflow/tfjs';

export default async kinos => {
  console.log('kinos received:', kinos);

  const onlyKinos = kinos.map(kino => kino.kino);
  const onlyDraws = kinos.map(kino => kino.drawNo);

  const maxKino = Math.max(...onlyKinos);
  // const minKino = Math.min(...onlyKinos);

  const minDraw = Math.min(...onlyDraws);

  const batchSize = 128;
  // Input data structure: [low, high, open, close, volume]
  const batchedXData = [];
  let batchXArr = [];
  // Output data example: [expectedClose]
  const batchedYData = [];
  let batchYArr = [];

  kinos.forEach(item => {
    // scaling

    const scaled = item.kino / maxKino;

    batchYArr.push(item.drawNo - minDraw + 1);
    batchXArr.push(scaled);

    if (batchXArr.length >= batchSize) {
      batchedXData.push(batchXArr);
      batchXArr = [];
      batchedYData.push(batchYArr);
      batchYArr = [];
    }
  });

  const trainTestRatio = 0.8;
  const trainTestSlice = Math.round(batchedXData.length * trainTestRatio);

  const trainXData = batchedXData.slice(0, trainTestSlice);
  const testXData = batchedXData.slice(trainTestSlice);
  const trainYData = batchedYData.slice(0, trainTestSlice);
  const testYData = batchedYData.slice(trainTestSlice);

  // Y (output) data shifted 1 minute inito the future to train model to be predictive
  const trainDataXs = trainXData.slice(0, trainXData.length - 1);
  const trainDataYs = trainYData.slice(1);
  const testDataXs = testXData.slice(0, testXData.length - 1);
  const testDataYs = testYData.slice(1);

  // step 2
  // debugger;
  const model = tf.sequential();

  // Layer: One vertical slice of neurons
  // Dense: Each individual input neuron is connected to every output neuron
  // units: Number of neurons in this layer
  // inputShape: The size of the input data array. Only needed for the first layer
  // (following layers are assumed to be the size of the preceeding layer).
  // activation: Function that introduces non-linearities into the statistical models.
  // relu is pretty standard. Look at the TF docs for more info on available options if you want.
  const numInputs = 1;
  const numOutputs = 1;
  const numNeurons = 512;

  const hidden = tf.layers.dense({
    units: numNeurons,
    inputShape: [numInputs],
    // activation: 'relu',
  });
  const hidden2 = tf.layers.dense({
    units: numNeurons,
    activation: 'tanh',
  });

  const hidden3 = tf.layers.dense({
    units: numNeurons,
    inputShape: [numNeurons],
    activation: 'tanh',
  });
  // const flattenLayer = tf.layers.flatten();

  const output = tf.layers.dense({
    units: numOutputs,
    activation: 'tanh',
  });

  // Add the layers to the model in the desired order
  model.add(hidden);
  model.add(hidden2);
  model.add(hidden3);
  // model.add(flattenLayer);
  model.add(output);

  // Define your training optimizer function and learning rate
  // sgd: Stochastic Gradient Descent (Very data science. Feel free to dig in if you wish.)
  // learningRate: Think of this as the 'step size' your algorithm takes when trying to find the best result.
  // Too big and you'll overshoot the target, too small and it takes forever (and ever) to train!
  // Feel free to toy with this number. I found success between 0.05 and 0.1, but it is different for
  // every data set!
  // debugger;
  const learningRate = 0.05;
  const sgdOptimizer = tf.train.sgd(learningRate);

  // Finally, we get to compile the model!
  // loss: The function used to calculate how accurately the model is matching the data. (meanSquaredError is pretty standard)
  model.compile({
    optimizer: sgdOptimizer,
    loss: 'meanSquaredError',
  });

  // step 3

  // Looping over each batch in the array of all of the batches
  for (let i = 0; i < trainDataXs.length - 1; i++) {
    // build the input tensor [[low1, high1, open1, close1, volume1],[low2, high2, open2, close2, volume2],...]

    const xs = tf.tensor2d(trainDataXs[i], [batchSize, numInputs]);

    // build the input tensor [[expectedOutput1],[expectedOutput2],...]
    const ys = tf.tensor2d(trainDataYs[i], [batchSize, numInputs]);

    // const batchSize = 128 defined earlier
    // epoch: Number of iterations to train over for each batch. A higher number yields:
    // a better fit, slower run time, and a greater chance of over-fitting (bad)
    // I ran between 10 and 100 epochs, but it is another dial to play with as you see fit.
    const epochs = 25;
    const configFit = {
      batchSize,
      epochs,
    };
    // This is the line that actually trains the model! It adjusts the model to take 1 'step' closer to fitting the data.
    // debugger;
    const response = await model.fit(xs, ys, configFit);
    // debugger;
    // Outputs are stored in the response.history, so you can do what you want with them from there.
    const loss = response.history.loss[0];
    console.log('Rd:', i, '  Train Loss:', loss);
  }

  // step 6

  const yActual = [];
  const yResults = [];
  // debugger;
  console.log(testDataXs);
  // Looping over each batch in the array of all of the test batches
  for (let i = 0; i < testDataXs.length; i++) {
    // Build the input tensor

    const xs = tf.tensor2d(testDataXs[i], [batchSize, numInputs]);

    // Each prediction makes a series of tensors that build up over time and take up lots of memory.
    // tf.tidy cleans up all the extra tensors after each run to keep the predictions coming quickly!
    tf.tidy(() => {
      // debugger;
      // This is where you use the model to predict the outputs on the previously unseen data.
      const preds = model.predict(xs);
      // Keeps the predictions in order due to asynchronisity
      // debugger;
      const y_vals = preds.dataSync();
      // Build actual//expected output array
      testDataYs[i].forEach(elem => {
        yActual.push(elem);
      });
      // Build predicted results array
      y_vals.forEach(elem => {
        yResults.push(elem);
      });
    });
  }
  // debugger;
  // Build a final results array to graph using whichever tool you prefer!
  const fullResults = yActual.map((item, j) => [item, yResults[j]]);

  console.log('fullResults:', fullResults);
  return ({
    prediction: [],
    bestfit: [],
  });
};
