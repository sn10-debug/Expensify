import React from "react";
import { connect } from "react-redux";
import { setTextfilter } from "../actions/filters";
import { setSortBy } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";
class SortingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.filters.startDate,
      endDate: this.props.filters.endDate,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextfilter(e.target.value.trim()));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date")
              this.props.dispatch(setSortBy("date"));
            else this.props.dispatch(setSortBy("amount"));

            // Controlled inputs are the attributes of a Component which is controlled by javascript
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          showClearDates={true}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    filters: state.filters,
  };
})(SortingText);
