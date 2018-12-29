import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as actions from '../../../store/actions';

class PredictionLinePlot extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  render () {
    const { kinos, limited, allKinos, waitForPrediction, bestfit } = this.props;

    console.log('waitForPrediction:', waitForPrediction, ' bestfit:', bestfit);

    if (bestfit.length > 0 && !waitForPrediction) {
      return (<div>
        <LineChart
          width={600} height={300}
          data={limited ? kinos : allKinos}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="drawNo" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone" dataKey="kino"
            stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>);
    } else if (bestfit.length === 0 && waitForPrediction) {
      return (<Loader
        type="ThreeDots"
        color="#ff6347"
        height={80}
        width={80} />);
    } else {
      return (<div />);
    }
  }
}

export default connect(state => state, actions)(PredictionLinePlot);
