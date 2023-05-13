import React from "react";
import ExpenseList from "./ExpenseList";
import SortingText from "./SortingText";

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <p>This is a Homepage</p>
        <SortingText />
        <ExpenseList />
      </div>
    );
  }
}
