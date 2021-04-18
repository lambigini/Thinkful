// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution");

describe("findStudentByName", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];

  it("should return the select student's score when a correct name is given", () => {
    const expected = { name: "Natalee Vargas", score: 9.2 };

    const actual = findStudentByName(students, "Natalee Vargas");

    expect(actual).to.eql(expected);
  });

  it("should return null if the name does not match", () => {
    const expected = null;

    const actual = findStudentByName(students, "kaka");

    expect(actual).to.be.null;
  });
});
