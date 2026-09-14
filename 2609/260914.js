//この配列を受け取り、score が60点以上の人の名前だけを新しい配列にして返す関数 getPassedStudents を作ってください。
// const students = [
//   { name: "Alice", score: 80 },
//   { name: "Bob", score: 55 },
//   { name: "Carol", score: 70 },
//   { name: "Dave", score: 40 }
// ];

const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 55 },
  { name: "Carol", score: 70 },
  { name: "Dave", score: 40 }
];

const getPassedStudents = (examinee) => {
 let passStudent = [];
 for (let k = 0; k<examinee.length; k++) {
  if (examinee[k].score >= 60) {
   passStudent.push(examinee[k].name)
  }
 }
 return passStudent;
}

console.log(getPassedStudents(students));
// ["Alice", "Carol"]

//模範解答
// const getPassedStudents = (examinee) => {
//   const passedStudents = [];

//   for (const student of examinee) {
//     if (student.score >= 60) {
//       passedStudents.push(student.name);
//     }
//   }

//   return passedStudents;
// };

//他の書き方
// const getPassedStudents = (examinee) => {
//   return examinee
//     .filter(student => student.score >= 60) // 60点以上で絞り込み
//     .map(student => student.name);          // 名前だけの配列に変換
// }
