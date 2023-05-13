import moment from "moment";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Action object for adding Expense ", () => {
  let obj = addExpense("Expense-1", "Monthly bills", 300000, moment());
  console.log(obj);
});

test("Action object for editing expense", () => {
  let obj = editExpense({
    id: "63bdbdgfg4747",
    changes: {
      amount: 300,
      name: "Donation",
    },
  });

  console.log(obj);
});

test("Action object for removing expense", () => {
  let obj = removeExpense({
    id: "75775hfhfhfhh",
  });

  console.log(obj);
});

test("Comparing two objects", () => {
  //   expect({}).toBe({});

  //   {}==={} will always return false and if we want to check the properties then we have to use some other function

  expect({}).toEqual({});
  //   This will check with respect to the properties

  let num1 = "123";

  let obj = {
    num: num1,
  };

  expect(obj).toEqual({ num: expect.any(String) });
});

console.log(moment(0).subtract(4, "days").valueOf());
console.log(moment(0).add(4, "days").valueOf());
