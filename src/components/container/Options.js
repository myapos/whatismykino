import React, { Component } from 'react';

// import DatePicker from 'react-datepicker';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import MyCustomDatePicker from './MyCustomDatePicker';
import ScatterPlot from './charts/ScatterPlot';
import Histogram from './charts/Histogram';
import LinePlot from './charts/LinePlot';
import PredictionLinePlot from './charts/PredictionLinePlot';

import { availableSelectValues } from '../../constants';

class Options extends Component {
  handleChange (selectedOption) {
    const { allKinos, occurences, allOccurences, kinos } = this.props;

    if (allKinos.length > 0 && selectedOption.value !== 'ALL') {
      this.props.limitKinos(selectedOption, allKinos, occurences, true);
      this.props.setLimited(true);
    } else if (allKinos.length > 0 && selectedOption.value === 'ALL') {
      this.props.limitKinos(selectedOption, allKinos, allOccurences, false);
      this.props.setLimited(false);
    } else {
      alert('You have to select date range first!');
    }
    // this.setState({ selectedOption });
  }

  render () {
    const { kinos } = this.props;

    return (
      <div id="options-container">
        <div id="options">
          <MyCustomDatePicker />
          <div id="labelForSelect">Select last draws: </div>
          <Select
            className="select"
            options={availableSelectValues.generateValues(kinos.length)}
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="results">
          <div className="chartContainer">
            <LinePlot />
            <ScatterPlot />
            <Histogram />
          </div>
          <div className="preditionContainer">
            <PredictionLinePlot />
          </div>
        </div>

      </div>);
  }
}

Options.propTypes = {
  kino: PropTypes.object,
  fetchForDate: PropTypes.func,
  limitKinos: PropTypes.func,
  setLimited: PropTypes.func,
};

export default connect(state => state, actions)(Options);

// export default connect(
//   state => ({
//     startDate: state.startDate,
//     endDate: state.endDate,
//     maxDate: state.maxDate,
//     kinos: state.kinos,
//   }),
//   { fetchForDate }
// )(Options);
