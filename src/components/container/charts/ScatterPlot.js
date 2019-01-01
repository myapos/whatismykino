import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as actions from '../../../store/actions';
import { widthPlot, heightPlot } from '../../../constants';

class ScatterPlot extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  render () {
    const { occurences, limited, allOccurences } = this.props;

    if (occurences.length > 0) {
      return (<div>
        <div className="labelForChart"> Kinos occurences scater plot </div>
        <ScatterChart
          width={widthPlot} height={heightPlot}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis
            dataKey={'kino'} type="number"
            name="kino" />
          <YAxis
            dataKey={'occurences'} type="number"
            name="occurences" />
          <Scatter
            name="occurences"
            data={limited ? occurences : allOccurences}
            fill="#8884d8" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
        </ScatterChart>
      </div>);
    } else {
      return (<div />);
    }
  }
}

export default connect(state => state, actions)(ScatterPlot);
