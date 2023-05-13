import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";
import filterExpenses from "../selectors/expenses";

export class ExpenseList extends React.Component {
  render() {
    return (
      <div>
        <p>Expense List : </p>

        {this.props.expenses.map((mov) => (
          <Expense
            history={this.props.history}
            key={mov.id}
            {...mov}
            edit={this.props.edit}
          />
        ))}
      </div>
    );
  }
}

let ConnectedExpenseList = connect((state) => {
  // In this function we have access to the state of the store
  return {
    expenses: filterExpenses(state.expenses, state.filters),
  };
  //   Now this object will be passed as a prop to the component
})(ExpenseList);

export default ConnectedExpenseList;
