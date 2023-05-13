const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  let filteredExpenses = expenses.filter((expense) => {
    let dateMatch, textMatch;

    if (
      (startDate
        ? expense.createDate.valueOf() >= startDate.valueOf()
        : true) &&
      (endDate ? expense.createDate.valueOf() <= endDate.valueOf() : true)
    )
      dateMatch = true;

    if (expense.description.toLowerCase().split(text.toLowerCase()).length > 1)
      textMatch = true;

    return dateMatch && textMatch;
  });

  if (sortBy === "date") {
    filteredExpenses.sort(
      (a, b) =>
        new Date(new Date() - a.createDate.valueOf()) -
        new Date(new Date() - b.createDate.valueOf())
    );
    return filteredExpenses;
  }

  if (sortBy === "amount") {
    filteredExpenses.sort((a, b) => b.amount - a.amount);
    return filteredExpenses;
  }
};

export default filterExpenses;
