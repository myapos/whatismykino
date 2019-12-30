import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
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

class PredictionLinePlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  render() {
    const {
      kinos,
      limited,
      allKinos,
      waitForPrediction,
      trendData,
      prediction,
      maData,
      lwmaData
    } = this.props;

    console.log(
      "waitForPrediction:",
      waitForPrediction,
      " prediction:",
      prediction
    );

    if (prediction.length > 0 && !waitForPrediction) {
      // preprocess data and convert  float32array to array with integers

      console.log(prediction);
      return (
        <div>
          <div className="labelForChart">
            Prediction based on Holt-Winters approach
          </div>
          <LineChart
            width={widthPlot}
            height={heightPlot}
            data={prediction}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="xs" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kinos"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>

          <div className="labelForChart">Moving average</div>
          <LineChart
            width={widthPlot}
            height={heightPlot}
            data={maData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="xs" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kinos"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>

          <div className="labelForChart">Linear weighted moving average</div>
          <LineChart
            width={widthPlot}
            height={heightPlot}
            data={lwmaData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="xs" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kinos"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>

          <div className="labelForChart">Trend</div>
          <LineChart
            width={widthPlot}
            height={heightPlot}
            data={trendData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="xs" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="kinos"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      );
    } else if (prediction.length === 0 && waitForPrediction) {
      return <Loader type="ThreeDots" color="#ff6347" height={80} width={80} />;
    } else {
      return <div />;
    }
  }
}

export default connect(state => state, actions)(PredictionLinePlot);
