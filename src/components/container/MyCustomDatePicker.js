import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import moment from 'moment';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:

import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';

import * as actions from '../../store/actions';

const handleEvent = (event, picker) => {
  console.log(picker.startDate);
};

const MyCustomDatePicker = ({ startDate, endDate, maxDate }) =>
  <div>
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      maxDate={maxDate}
      onEvent={handleEvent} >
      <div className="input-group" id="customizeInputGroup">
        <input
          type="text"
          className="form-control"
          readOnly
          value={'test'} />
        <span className="input-group-btn">
          <button className="default date-range-toggle btn btn-default">
            <div id="calImg" />
          </button>
        </span>
      </div>
    </DateRangePicker> </div>;

MyCustomDatePicker.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  maxDate: PropTypes.object,
};
export default connect(state => state, actions)(MyCustomDatePicker);
