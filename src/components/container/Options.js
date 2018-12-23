import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import dayjs from 'dayjs';
import moment from 'moment';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:

import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

// import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { connect } from 'react-redux';
import { formatDate } from '../../utils/';

import { fetchForDate } from '../../store/actions';

// import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';

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
    // debugger;
    console.log(picker.startDate);
  }
  render () {
    // const { selectedDate, selectedOption } = this.state;
    // const { kino } = this.props;

    return (
      <div id="options-container">
        <DateRangePicker
          startDate={moment().subtract(29, 'days')}
          endDate={moment()}
          onEvent={this.handleEvent} >
          <div className="input-group" id="customizeInputGroup">
            <input
              type="text"
              className="form-control"
              readOnly
              value={`test`} />
            <span className="input-group-btn">
              <button className="default date-range-toggle btn btn-default">
                <div id="calImg" />
              </button>
            </span>
          </div>
        </DateRangePicker>
        {/*  <DatePicker
          className="dates"
          selected={selectedDate}
          placeholderText="Click to select a date"
          onChange={this.handleDate}
          dateFormat="yyyy-MM-dd" /> */}
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
  state => ({ kino: state.kino }),
  { fetchForDate }
)(Options);
