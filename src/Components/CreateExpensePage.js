import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

console.log(moment().format());

class CreateExpensePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      message: null,
      amount: "",
      date: moment(),
      calFocused: false,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let name = e.target.elements.name.value;
    let description = e.target.elements.description.value;
    let amount = e.target.elements.amount.value * 1;
    let date = new Date(this.state.date.format());

    if (!name || !description || !amount) {
      this.setState(() => ({
        message: "Make sure you fill all the details properly",
      }));
      return;
    }

    this.setState(() => {
      return { message: "Successfully Submitted" };
    });

    this.props.dispatch(addExpense({ name, description, amount, date }));
    console.log(this.props);
    this.props.history.push("/");

    // This will push to the previous page
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
    this.setState(() => ({ date }));
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calFocused: focused }));
  }

  render() {
    // numberOfMonths defines the number of months should be displayed when the user clicks on date input

    return (
      <div>
        <p>This is the page where you create Expense</p>
        <form onSubmit={this.onFormSubmit}>
          <label>Expense Name : </label>
          <input
            name="name"
            placeholder="Expense Name"
            type={"text"}
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <br />
          <label>Description : </label>
          <textarea
            name="description"
            placeholder="Description"
            onChange={this.onDescChange}
          ></textarea>
          <br />
          <label>Amount : </label>
          <input
            name="amount"
            type={"text"}
            placeholder="0"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.calFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />

          <button>Create</button>
        </form>

        {this.state.message ? <p>{this.state.message}</p> : ""}
      </div>
    );
  }
}

export default connect()(CreateExpensePage);

// The mapping function we pass into connect to map state and props , over here the first parameter is state and the second parameter is props
// and the second props consists the attributes which we pass inline while creating the component
