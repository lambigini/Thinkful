// Write your tests here!
const {expect} = require("chai");

const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore", () =>{
    it("should split students by score", () =>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];

          const expected = [
            [{ name: "Morgan Sutton", score: 7.4 }],
            [
              { name: "Leo Yeon-Joo", score: 8.9 },
              { name: "Natalee Vargas", score: 9.2 },
            ],
          ];

          const actual = partitionStudentsByScore(students, 8);

          expect(actual).to.eql(expected);
    });

    it("should place all students in one bucket if necessary", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];

          const expected =[ [
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Natalee Vargas", score: 9.2 },
          ],

          []
          
        ];

          const actual = partitionStudentsByScore(students, 10);
          
          expect(actual).to.eql(expected);

    });

    it("should return an empty array with two arrays if the students list is empty", ()=> {
        const students = [];

        const expected = [ [],[] ];
        
        const actual = partitionStudentsByScore(students, 5);

        expect(actual).to.eql(expected);

    });
})