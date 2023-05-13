export const setTextfilter = (text = "") => ({ type: "SET_TEXT", text });
export const setSortBy = (method = "date") => ({
  type: "SET_SORT_METHOD",
  method,
});
export const setStartDate = ({ date = undefined } = {}) => {
  return {
    type: "SET_START_DATE",
    date,
  };
};
export const setEndDate = ({ date = undefined } = {}) => {
  return {
    type: "SET_END_DATE",
    date,
  };
};
