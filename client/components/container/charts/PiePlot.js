import React, { Component } from "react";
import { connect } from "react-redux";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

import * as actions from "../../../store/actions";
import { widthPlot, heightPlot } from "../../../constants";

class PiePlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    const { histogramResults, limited } = this.props;
    const style = {
      top: 0,
      left: 350,
      lineHeight: "24px"
    };
    if (histogramResults && histogramResults.length > 0) {
      return (
        <div>
          <div className="labelForChart"> Kinos pie plot </div>
          <PieChart width={widthPlot} height={heightPlot}>
            <Pie
              dataKey="frequency"
              data={histogramResults}
              label
              outerRadius="100%"
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default connect(state => state, actions)(PiePlot);
