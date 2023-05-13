import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class EditExpenseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      amount: this.props.amount,
      createDate: moment(this.props.createDate),
      focused: false,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onChangeFocus = this.onChangeFocus.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    let name = this.state.name;
    let description = this.state.description;
    let amount = e.target.elements.amount.value;
    let createDate = this.state.createDate.valueOf();

    this.props.onSaveEdits({ name, description, amount, createDate });
  }

  onNameChange(e) {
    let name = e.target.value;
    this.setState(() => ({ name }));
  }

  onDescChange(e) {
    let description = e.target.value;
    this.setState(() => ({ description }));
  }

  onAmountChange(e) {
    let amount = e.target.value;
    let exp = /((^\d+(\.\d{0,2})?$)|(^[]{0}$))/;

    if (exp.test(amount)) this.setState(() => ({ amount }));
  }

  onDateChange(date) {
    if (!date) return;
    this.setState(() => ({ createDate: date }));
  }
  onChangeFocus({ focused }) {
    this.setState(() => ({
      focused,
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.name}
            onChange={this.onNameChange}
            name={"name"}
          />
          <textarea
            value={this.state.description}
            onChange={this.onDescChange}
            name={"description"}
          ></textarea>
          <input
            value={this.state.amount}
            onChange={this.onAmountChange}
            name={"amount"}
          />

          <SingleDatePicker
            date={this.state.createDate}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onChangeFocus}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EditExpenseBar;
