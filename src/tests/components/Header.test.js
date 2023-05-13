import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import React from "react";
import Header from "../../Components/Header";
// When we are concerned only about the rendering of the component and not user interactions then we use ReactShallowRenderer

// Here the child component won't be rendered

// Using full dom rendering , we can render the child components as well

// test("rendering header component", () => {
//   let renderer = new ReactShallowRenderer();

//   renderer.render(<Header />);
//   // console.log(renderer.getRenderOutput());

//   expect(renderer.getRenderOutput()).toMatchSnapshot();

//   //   At the initial stage it will take the snapshot as no snapshot is stored

//   // On the next test when the snapshot is already stored it will compare the present header with that snapshot and if it is not equal then it will not pass the test

//   // If we want to update the snapshot we can use the command npm run test -- -u
// });

// We need to install a adapter for the enzyme so that the enzyme knows which version of react we are using

// raf-request animation frame is required by the browser

test("Rendering Header Component", () => {
  let wrapper = shallow(<Header />);
  expect(wrapper.find("h2").length).toBe(1);

  // This find method on the wrapper class works same as the querySelector

  // console.log(wrapper.find("h2").text());

  expect(wrapper.find("h2").text()).toBe("Expensify");
});

test("Checking the Header Content", () => {
  let wrapper = shallow(<Header />);
  expect(wrapper.getElement()).toMatchSnapshot();
  // expect(wrapper.find("h2").text()).toBe("Expensify");
  console.log(wrapper.getElements());
});
