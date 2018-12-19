import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select';

import { connect } from "react-redux";
import { formatDate } from "../utils/";

import { fetchForDate } from "../store/actions";

import "react-datepicker/dist/react-datepicker.css";

import PropTypes from "prop-types";

class Options extends Component {
	constructor(props) {
		super(props);
		
    this.state = {
			selectedOption: null,
		};
		
    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
	
	handleDate(date) {
		const { fetchForDate } = this.props;

    this.setState({
      selectedDate: date
		});

		fetchForDate(formatDate(date));
	}
	
	handleChange(selectedOption) {
    this.setState({ selectedOption });
	}
	
	render() {
		const { selectedDate, selectedOption } = this.state;
		const { kino } = this.props;

    return (
			<div id="options-container">
        <DatePicker
					className="dates" 
					selected={selectedDate}
					placeholderText="Click to select a date"
					onChange={this.handleDate}
					dateFormat="yyyy-MM-dd" />
				<Select
					className="select"
					value={selectedOption}
					onChange={this.handleChange}
					{...(kino ? { options: kino.drawIds } : { isDisabled: true })}
				/>
    </div>);
  }
}

Options.propTypes = {
	kino: PropTypes.object,
	fetchForDate: PropTypes.func
};

export default connect(
	state => ({ kino: state.kino }),
	{ fetchForDate }
)(Options);
