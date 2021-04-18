// Write your tests here!
const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");

describe("findStudentScoreByName", () => {
    const students = [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ];

it("should return the correct number", () => {
   
const expected = 7.4;
const actual = findStudentScoreByName(students, "Morgan Sutton");
expect(actual).to.equal(expected);
});

it("should return the select student's score when a correct name is given", ()=> {
const expected = 9.2;
const actual = findStudentScoreByName(students, "Natalee Vargas");
expect(actual).to.equal(expected);
})

it("should return null when incorrect name is given", ()=> {
    const expected =null;
    const actual = findStudentScoreByName(students, "kaka lala");
    expect(actual).to.equal(expected);
    })


});