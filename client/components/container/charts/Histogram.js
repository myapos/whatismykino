import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { widthPlot, heightPlot } from "../../../constants";

class Histogram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  render() {
    const { occurences, limited, allOccurences, histogramResults } = this.props;

    console.log("histogramResults", histogramResults);
    if (histogramResults && histogramResults.length > 0) {
      return (
        <div>
          <div className="labelForChart"> Histogram of kinos </div>
          <BarChart
            width={widthPlot}
            height={heightPlot}
            data={histogramResults}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kino" />
            <YAxis />
            <Legend />
            <Bar dataKey="frequency" fill="#8884d8" />
            <Tooltip />
          </BarChart>
        </div>
      );
    } else {
      return (
        <div className="dateRangeMsg">
          Please select date range and click apply
        </div>
      );
    }
  }
}

export default connect(state => state, actions)(Histogram);
