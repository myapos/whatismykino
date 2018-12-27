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

import { availableSelectValues } from '../../constants';

class Options extends Component {
  handleChange (selectedOption) {
    const { kinos, occurences } = this.props;
    // console.log('kinos:', kinos);
    debugger;
    if (kinos.length > 0 && selectedOption.value !== 'ALL') {
      this.props.limitKinos(selectedOption, kinos, occurences);
      this.props.setLimited(true);
    } else if (kinos.length > 0 && selectedOption.value === 'ALL') {
      this.props.setLimited(false);
    } else {
      alert('You have to select date range first!');
    }
    // this.setState({ selectedOption });
  }

  render () {
    console.log(availableSelectValues.generateValues());
    // debugger;
    return (
      <div id="options-container">
        <div id="options">
          <MyCustomDatePicker />
          <Select
            className="select"
            options={availableSelectValues.generateValues()}
            onChange={this.handleChange.bind(this)} />
        </div>
        <LinePlot />
        <ScatterPlot />
        <Histogram />
        {/* <Select
          className="select"
          value={selectedOption}
          onChange={this.handleChange}
          {...(kino ? { options: kino.drawIds } : { isDisabled: true })} /> */}
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
