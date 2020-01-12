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

    console.log(
      "occurences",
      occurences,
      " limited",
      limited,
      " allOccurences:",
      allOccurences
    );

    const data = [
      {
        kino: "Page A",
        frequency: 4000
      },
      {
        kino: "Page B",
        frequency: 3000
      },
      {
        kino: "Page C",
        frequency: 2000
      },
      {
        kino: "Page D",
        frequency: 2780
      },
      {
        kino: "Page E",
        frequency: 1890
      },
      {
        kino: "Page F",
        frequency: 2390
      },
      {
        kino: "Page G",
        frequency: 3490
      }
    ];
    // data={limited ? occurences : allOccurences}
    if (1 || occurences.length > 0) {
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
      return null;
    }
  }
}

export default connect(state => state, actions)(Histogram);
