import React from "react";

let HigherComponent = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>Welcome to Sigma</p>
      {<WrappedComponent {...props} />}
    </div>
  );
};

let dispProducts = (props) => {
  return (
    <div>
      {props.products.length ? "Go to Checkout" : "Select some Products"}
    </div>
  );
};

dispProducts.defaultProps = {
  products: [],
};

export default HigherComponent(dispProducts);
