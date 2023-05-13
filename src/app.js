import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import AppRouter from "./Routers/AppRouter";
import PortfolioRouter from "./Routers/PortfolioRouter";
import { Provider } from "react-redux";
// import "./Trials/redux-expensify";
import "./styles/style.scss";
import configureStore from "./stores/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";

import moment from "moment";
import {
  setTextfilter,
  setSortBy,
  setStartDate,
  setEndDate,
} from "./actions/filters";

import CheckProds from "./Playground/hoc";

import filterExpenses from "./selectors/expenses";

let store = configureStore();

store.subscribe(() => {
  //   console.log(store.getState());
  // console.log(
  //   filterExpenses(store.getState().expenses, store.getState().filters)
  // );
});

store.dispatch(
  addExpense({
    name: "Gas Bill",
    amount: 3000000,
    description: "Monthly Gas bill",
  })
);

store.dispatch(
  addExpense({
    name: "Water Bill",
    amount: 40000,
    description: "Monthly Water bill",
  })
);

store.dispatch(setTextfilter("Bill"));

// setTimeout(() => {
//   // As the store changes the component gets re-rendered
//   store.dispatch(setTextfilter("HelloWorld"));
// }, 5000);

// We will be doing React Roouting

// Routing which happens on the Client side on changing URL's with HTML5 history API

// react-router-dom is used for routing specifically for web
// react-router-native is used for routing in native android and ios apps

// The Route without the path prop will be rendered for every path but not for the match found before it as we have used Switch Component

// We use Link Component to avoid the full refresh of the page as we know that whenever the whole page is reloaded then it is making a request to server and we need to avoid as we are doing Client side routing

// Whenever we want to do Client Side Rendering we use Link Tags

// React Route passes down some props into React Components

// Redux

// Redux is a library used to manage complex states for the Components

// Components are actually not reusable like the Actions Component is not reusable because it needs ceratin props from the Indecisiion App and if we want to use Actions Component in the Header Component then we have to pass props from Indecision App to Header and from there to Actions and this looks fine for 2 3 layers but what about large amount of layers and if we don't have a global Component like Indecision App and we have a Router and then how could we manage without any parent Component

// Here comes the Redux to manage the global State

// Actually Redux is a state container

// Higher Order Components : A component which renders other components

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector(".main-container")
);

// Now all the components will be having access to the store

// ReactDOM.render(
//   <CheckProds products={["Hello"]} />,
//   document.querySelector(".main-container")
// );
