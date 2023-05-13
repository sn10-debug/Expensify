import React from "react";
import { ExpenseList } from "../../Components/ExpenseList";
import { shallow } from "enzyme";
import { addExpense } from "../../actions/expenses";
import moment from "moment";

test("Testing the Expense List", () => {
  let wrapper = shallow(
    <ExpenseList
      expenses={[
        {
          ...addExpense({
            name: "Water Bill",
            amount: 30000,
            description: "Monthly Water bill",
          }).expense,
          id: "20",
          createDate: moment().startOf("month"),
        },
        {
          ...addExpense({
            name: "Gas Bill",
            amount: 40000,
            description: "Monthly Gas bill",
          }).expense,
          id: "20",
          createDate: moment().startOf("month"),
        },
      ]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
