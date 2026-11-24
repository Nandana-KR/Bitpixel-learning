let students = [
  {
    id: 1,
    name: "Abi",
    age: 12,

  },
  {
    id: 2,
    name: "Biju",
    age: 14,
  },
  {
    id: 3,
    name: "Jibin",
    age: 15,

  }
];
console.log("------create----------")
function addStudent(newStudent) {
  students.push(newStudent);
  return newStudent;
}

addStudent({ id: 4, name: "Anu", age: 16 });
addStudent({ id: 5, name: "Ammu", age: 17 });
console.log(students);

console.log("------read----------");

function getAllStudents() {
  return students;
}
console.log(getAllStudents());

function getStudentById(id) {
  return students.find((student) => student.id === id);
}
console.log(getStudentById(5));
console.log(getStudentById(99)); //id not available

//---update---
console.log("-------update---------")
function updateStudent(id, age) {
  const student = getStudentById(id);
  if (student === undefined) {
    return "student not found";
  }
  student.age = age;
  return student;
}
console.log(updateStudent(2, 17));
console.log(updateStudent(10, 17));

console.log("------delete------------")

function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    return "student not found"
  }
  const deleted = students.splice(index, 1);

  return deleted;

}
console.log(deleteStudent(2));
console.log("delete id 99:", deleteStudent(99));


console.log("--------search--------")
//find stops at first match,search gives all matching elements

function searchStudent(searchText) {
  const filter = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase()));
  return filter;
}
console.log(searchStudent("J"));
console.log(searchStudent("a"));

function filterByAge(min, max) {
  const result = students.filter(
    (student) => student.age >= min && student.age <= max);
  return result;
}

console.log(filterByAge(15, 17));

console.log("-------sort---------");

function sortByAge() {
  const sortAge = [...students].sort((a, b) => b.age - a.age);
  return sortAge;
}
console.log(sortByAge());

console.log("------Map----------");

function getStudentNames() {
  const mapStudent = students.map((student) => student.name);
  return mapStudent;
}
console.log(getStudentNames());