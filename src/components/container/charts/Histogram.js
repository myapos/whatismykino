import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { widthPlot, heightPlot } from '../../../constants';

class Histogram extends Component {
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
        <div className="labelForChart"> Histogram of kinos </div>
        <BarChart
          width={widthPlot} height={heightPlot}
          data={limited ? occurences : allOccurences}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="kino" />
          <YAxis />
          <Legend />
          <Bar dataKey="occurences" fill="#8884d8" />
          <Tooltip />
        </BarChart>
      </div>);
    } else {
      return (<div />);
    }
  }
}

export default connect(state => state, actions)(Histogram);
