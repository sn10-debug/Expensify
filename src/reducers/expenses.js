export default (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((mov) => mov.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((mov) => {
        if (mov.id === action.id) return { ...mov, ...action.changes };
        else return mov;
      });
    default:
      return state;
  }
};
