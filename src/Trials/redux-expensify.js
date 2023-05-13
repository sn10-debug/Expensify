import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
let defaultDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et iusto magnam commodi dolores obcaecati est aut placeat deserunt illo sequi aspernatur ipsam labore quidem distinctio, laborum maiores enim iste?";

class expense {
  constructor(
    name,
    description = defaultDescription,
    amount,
    createDate = Date.now()
  ) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.createDate = new Intl.DateTimeFormat("en-GB").format(createDate);
  }
}

let demoState = {
  expenses: [
    {
      id: "abdhhddhdj",
      name: "expense-1",
      description: defaultDescription,
      note: defaultDescription,
      amount: 30000000,
      createDate: null,
    },
  ],
  filters: {
    text: "",
    // This is to filter by text
    sortBy: "date",
    // This is sort the data with respect to the particular attribute on the expenses
    startDate: undefined,
    endDate: undefined,

    // This is to give the list of expenses in this interval
  },
};

// Our state is also going to track filters

// Here we will create 2 reducers . 1 will manage the expenses that is adding,removing,editing. 2nd will be involved with applying all the filter methods

const addExpense = ({
  name,
  description = defaultDescription,
  amount,
  date = Date.now(),
}) => ({
  type: "ADD_EXPENSE",
  expense: new expense(name, description, amount, date),
});

const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = ({ id, changes }) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    changes,
  };
};

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((mov) => mov.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((mov) => {
        if (mov.id === action.id) return { ...mov, ...action.changes };
        // if (mov.id === action.id)
        //   return addExpense({ ...mov, ...action.changes }).expense;
        else return mov;
      });
    default:
      return state;
  }
};

const filterReducerDefaultValue = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const setTextfilter = (text = "") => ({ type: "SET_TEXT", text });
const setSortBy = (method = "date") => ({ type: "SET_SORT_METHOD", method });
const setStartDate = ({ date = undefined } = {}) => {
  return {
    type: "SET_START_DATE",
    date,
  };
};
const setEndDate = ({ date = undefined } = {}) => {
  return {
    type: "SET_END_DATE",
    date,
  };
};

let store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  })
);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

let expense1 = store.dispatch(
  addExpense({ name: "Expense-1", amount: 300000 })
);
expense1 = expense1.expense;
store.dispatch(addExpense({ name: "Expense-2", amount: 300000 }));
store.dispatch(
  addExpense({
    name: "Expense-3",
    description: "Spent for food",
    amount: 200000,
  })
);

// The action object passed is returned by store.dispatch()

// store.dispatch(removeExpense(store.getState().expenses[0].id));
store.dispatch(removeExpense({ id: expense1.id }));

expense1 = store.dispatch(addExpense({ name: "Expense-1", amount: 300000 }));

store.dispatch(
  editExpense({
    id: expense1.expense.id,
    changes: { description: "Spent for Travel" },
  })
);

unsubscribe();

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  let filteredExpenses = expenses.filter((expense) => {
    let dateMatch, textMatch;

    if (
      (startDate ? expense.createDate >= startDate : true) &&
      (endDate ? expense.createDate <= endDate : true)
    )
      dateMatch = true;

    if (expense.description.toLowerCase().split(text.toLowerCase()).length > 1)
      textMatch = true;

    return dateMatch && textMatch;
  });

  if (sortBy === "date") {
    filteredExpenses.sort(
      (a, b) =>
        new Date(new Date() - a.createDate) -
        new Date(new Date() - b.createDate)
    );
    return filteredExpenses;
  }

  if (sortBy === "amount") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
    return filteredExpenses;
  }
};

unsubscribe = store.subscribe(() => {
  console.log(
    filterExpenses(store.getState().expenses, store.getState().filters)
  );
});
store.dispatch(setTextfilter("for"));
store.dispatch(setSortBy("amount"));

store.dispatch(setStartDate(Date.now()));
store.dispatch(setEndDate(Date.now()));

let obj1 = {
  name: "ABC",
  ID: uuidv4(),
  branch: "B-TECH in CSE",
};

// Using Spread operator in object

// console.log({ ...obj1, greeting: "Hello World" });
// console.log({ ...obj1, name: "DEF" });

// A babel plugin has to be installed named "@babel/plugin-proposal-object-rest-spread" in order to compile the object spread operator
