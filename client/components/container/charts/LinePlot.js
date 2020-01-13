import React, { Component } from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
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
    const { kinoData, limited, allKinos } = this.props;
    if (kinoData && kinoData.length > 0) {
      return (
        <div style={{ width: "100%", height: `${heightPlot}px` }}>
          <ResponsiveContainer width={700} height="80%">
            <LineChart
              width={widthPlot}
              height={heightPlot}
              data={kinoData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="drawId" />
              <YAxis dataKey="kino" />
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
          </ResponsiveContainer>
          <div className="labelForChart"> Kinos line plot </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(state => state, actions)(LinePlot);
