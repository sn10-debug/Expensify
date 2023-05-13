import moment from "moment";
import { v4 as uuidv4 } from "uuid";

let defaultDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et iusto magnam commodi dolores obcaecati est aut placeat deserunt illo sequi aspernatur ipsam labore quidem distinctio, laborum maiores enim iste?";

class expense {
  constructor(
    name,
    description = defaultDescription,
    amount,
    createDate = moment()
  ) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.createDate = createDate;
  }
}

export const addExpense = ({
  name,
  description = defaultDescription,
  amount,
  date = moment(),
}) => ({
  type: "ADD_EXPENSE",
  expense: new expense(name, description, amount, date),
});

export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const editExpense = ({ id, changes }) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    changes,
  };
};
