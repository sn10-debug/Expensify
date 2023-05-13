//  this .test.js is an important extension to identify a test file by the jest or else jest would not be able to identify the jest file

let name = () => "Shakti";

let sub = (a, b) => a - b;

test("Returning Name", () => {
  let name1 = name();
  expect(name1).toBe("Shakti");
});

// test and expect are the global functions provided by jest

// Running jest in watch mode

// npm run test -- --watch

// Everything before 1st -- will be for the yarn but after that it will be associated with the script

// While introducing into a script , test : "jest --watch"

test("Testing subtraction", () => {
  let result = sub(3, 4);

  expect(result).toBe(-1);
});

// expect function is used to make assertions
