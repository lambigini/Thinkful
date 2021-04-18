/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
let found = students.find( student => student.name === name);

if (found) return found;
else {
  found = null;
  return found;
}


}

module.exports = findStudentByName;
