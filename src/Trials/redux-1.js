import { createStore } from "redux";
console.log("Hello from Redux 1");

const store = createStore(
  (state = { greeting: "Hello World", count: 0 }, action) => {
    // if (action?.type === "INCREMENT") {
    //   return {
    //     count: state.count + 1,
    //   };
    // } else return state;

    // Instead of if-else statements we prefer to use switch statements in this callback

    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        };
      case "RESET":
        return {
          count: 0,
        };
      case "SET":
        return {
          count: action.count,
        };
      default:
        return state;
    }
  }
);

// Here the first parameter of the createStore function has to be a callback and in that callback we define the default state and then return the state to be the state of the store

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({ type: "RESET" });

const setCount = ({ count = 0 } = {}) => ({ type: "SET", count });

console.log(store.getState());

// This returns the state of the store

// We use Actions to make changes to the states

// Actions:this is an object which gets passed to the store to perform a action

let unsubscribe = store.subscribe(() => {
  // This function will always be called whenever there is a change in state

  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 10 }));

// It is a convention to write the Action in UpperCase and if it consists of more than one word than we should write the words separated with underscore

// Whenever a action is dispatched then the callback we passed while creating the store gets executed and it returns the new state

unsubscribe();

for (let i = 0; i < 10; i++) store.dispatch(incrementCount());

unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));

// subscribe is a method on the store which is called when everytime store changes

// subscribe means watching the changes

// A unsubscribe function is returned from this function and thus whenvever we want to unsubscribe we can call the returned function

// unsubscribing means stop watching the changes

// Actions object mandatorily should have type attribute defined

// We are going to use action generators in order to generarte the action objects in order to prevent Typos

// The callback we use inside a createStore is called as reducer

// Reducer

// 1. It should be a pure function

// A pure function is a function that it's functionality totality depends on the input arguments of the function and not on any of the global variable .

// 2. It should not mutate the actual state or action object passed into the reducer as the arguement
