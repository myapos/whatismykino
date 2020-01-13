import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import * as actions from "../../../store/actions";
import { widthPlot, heightPlot } from "../../../constants";

class ScatterPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  render() {
    const { kinoData, limited } = this.props;

    if (kinoData && kinoData.length > 0) {
      return (
        <div style={{ width: "100%", height: `${heightPlot}px` }}>
          <ResponsiveContainer width={700} height="80%">
            <ScatterChart
              width={widthPlot}
              height={heightPlot}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis
                dataKey={"drawId"}
                type="number"
                name="drawId"
                domain={["dataMin", "dataMax"]}
              />
              <YAxis dataKey={"kino"} type="number" name="kino" />
              <Scatter name="kinos" data={kinoData} fill="#8884d8" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="labelForChart"> Kinos scater plot </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(state => state, actions)(ScatterPlot);
