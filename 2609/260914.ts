type Student = {
  name: string;
  score: number;
};

const students1: Student[] = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 55 },
  { name: "Carol", score: 70 },
  { name: "Dave", score: 40 }
];

const getPassedStudentsTs = (examinee: Student[] ) => {
  const passedStudents: string[] = [];

  for (const student of examinee) {
    if (student.score >= 60) {
      passedStudents.push(student.name);
    }
  }

  return passedStudents;
};

console.log(getPassedStudentsTs(students1));