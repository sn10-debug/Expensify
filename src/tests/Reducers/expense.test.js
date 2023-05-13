import expensesReducer from "../../reducers/expenses";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
test("check for default values", () => {
  let state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("adding expense", () => {
  let state = expensesReducer(
    undefined,
    addExpense({
      name: "Water Bill",
      amount: 40000,
      description: "Monthly Water bill",
    })
  );

  expect(state[0].name).toBe("Water Bill");
});

test("removing expense", () => {
  let expense = addExpense({
    name: "Water Bill",
    amount: 40000,
    description: "Monthly Water bill",
  }).expense;

  let state = expensesReducer([expense], removeExpense({ id: expense.id }));

  expect(state).toEqual([]);
});

test("editing expense", () => {
  let expense = addExpense({
    name: "Water Bill",
    amount: 40000,
    description: "Monthly Water bill",
  }).expense;

  let state = expensesReducer(
    [expense],
    editExpense({ id: expense.id, changes: { name: "Gas Bill" } })
  );

  expect(state[0].name).toBe("Gas Bill");
});
