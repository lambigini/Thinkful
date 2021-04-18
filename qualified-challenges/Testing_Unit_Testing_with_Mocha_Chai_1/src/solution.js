/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {

 found = students.find(student => {
if (student.name === name)
return student.score;
} )
if (found) return found.score;
else return null;
}

module.exports = findStudentScoreByName;
