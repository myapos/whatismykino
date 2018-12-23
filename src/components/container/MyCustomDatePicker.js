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

const onApply = (event, picker, fetchKinosForDates) => {
  fetchKinosForDates(picker.startDate, picker.endDate);
};

// const handleEvent = (event, picker) => {
//   console.log(picker.startDate);
// };

const label = (startDate, endDate) => {
  let output = `${startDate.format('MMMM D, YYYY')} - ${endDate.format('MMMM D, YYYY')}`;
  if (startDate === endDate) {
    output = startDate.format('MMMM D, YYYY');
  }

  return output;
};
const MyCustomDatePicker = ({ startDate, endDate, maxDate, fetchKinosForDates }) =>
  // debugger;
  // console.log('test');
  <div>
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      maxDate={maxDate}
      onApply={(event, picker) => {
        onApply(event, picker, fetchKinosForDates);
      }}
      containerClass="picker">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          readOnly
          value={label(startDate, endDate)} />
        <span className="input-group-btn">
          <button className="default date-range-toggle btn btn-default">
            <div id="calImg" />
          </button>
        </span>
      </div>
    </DateRangePicker> </div>
;

MyCustomDatePicker.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  maxDate: PropTypes.object,
  fetchKinosForDates: PropTypes.func,
};
export default connect(state => state, actions)(MyCustomDatePicker);
