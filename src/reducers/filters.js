import moment from "moment";

const filterReducerDefaultValue = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),

  // This returns the start of the current month
  endDate: moment().endOf("month"),
  // This returns the end of the current month
};

export default (state = filterReducerDefaultValue, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SET_SORT_METHOD":
      return { ...state, sortBy: action.method };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      if (!state.endDate || action.date > state.endDate)
        return { ...state, endDate: action.date };
      else return state;
    default:
      return state;
  }
};
