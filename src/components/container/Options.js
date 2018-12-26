import React, { Component } from 'react';

// import DatePicker from 'react-datepicker';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { formatDate } from '../../utils/';

import { fetchForDate } from '../../store/actions';

import MyCustomDatePicker from './MyCustomDatePicker';
import ScatterPlot from './charts/ScatterPlot';
import Histogram from './charts/Histogram';
import LinePlot from './charts/LinePlot';

class Options extends Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   selectedOption: null,
    // };

    // this.handleDate = this.handleDate.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleDate (date) {
    const { fetchForDate } = this.props;

    this.setState({
      selectedDate: date,
    });

    fetchForDate(formatDate(date));
  }

  handleChange (selectedOption) {
    this.setState({ selectedOption });
  }

  handleEvent (event, picker) {
    console.log(picker.startDate);
  }
  render () {
    return (
      <div id="options-container">
        <MyCustomDatePicker />
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
};

export default connect(
  state => ({
    startDate: state.startDate,
    endDate: state.endDate,
    maxDate: state.maxDate,
  }),
  { fetchForDate }
)(Options);
