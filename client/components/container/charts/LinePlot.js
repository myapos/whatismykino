import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import * as actions from "../../../store/actions";
import { widthPlot, heightPlot } from "../../../constants";

class LinePlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  render() {
    const { kinos, limited, allKinos } = this.props;
    if (kinos.length > 0) {
      return (
        <div>
          <div className="labelForChart"> Kinos line plot </div>
          <LineChart
            width={widthPlot}
            height={heightPlot}
            data={limited ? kinos : allKinos}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="drawNo" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kino"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(state => state, actions)(LinePlot);
