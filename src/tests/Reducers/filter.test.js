import moment from "moment";
import FilterReducer from "../../reducers/filters";

let obj = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),

  endDate: moment().endOf("month"),
};

test("Checking the default values", () => {
  let state = FilterReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(obj);
});

test("setting sortBy attribute to amount", () => {
  let state = FilterReducer(undefined, {
    type: "SET_SORT_METHOD",
    method: "amount",
  });

  expect(state).toEqual({ ...obj, sortBy: "amount" });
});

test("setting sortBy attribute to date", () => {
  let state = FilterReducer(
    { ...obj, sortBy: "amount" },
    {
      type: "SET_SORT_METHOD",
      method: "date",
    }
  );

  expect(state.sortBy).toBe("date");
});

// Setting text filter

test("setting text filter", () => {
  let state = FilterReducer(undefined, { type: "SET_TEXT", text: "hello" });

  expect(state.text).toBe("hello");
});

test("setting start date", () => {
  let state = FilterReducer(
    { ...obj, startDate: undefined },
    { type: "SET_START_DATE", date: moment().startOf("month") }
  );

  expect(state.startDate).toEqual(moment().startOf("month"));
});

test("setting end date", () => {
  let state = FilterReducer(
    { ...obj, endDate: undefined },
    {
      type: "SET_END_DATE",
      date: moment().endOf("month"),
    }
  );

  expect(state.endDate).toEqual(moment().endOf("month"));
});
