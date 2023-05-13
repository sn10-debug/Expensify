import React from "react";
import ConnectedExpenseList from "./ExpenseList";
import SortingText from "./SortingText";

export default class EditExpensePage extends React.Component {
  render() {
    return (
      <div>
        <SortingText />
        <ConnectedExpenseList edit={true} history={this.props.history} />
      </div>
    );
  }
}
