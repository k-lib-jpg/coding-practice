type ConArr = {
  start: number,
  end: number,
  sum: number
}

type ConArrs = ConArr[];

const findTargetSubarraysTs = (numbers: number[], target: number): ConArrs => {
  const conArr = [];

  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;

    for (let j = i; j < numbers.length; j++) {
      sum += numbers[j];

      if (sum === target) {
        conArr.push({
          start: i,
          end: j,
          sum: sum
        });
      }
    }
  }

  return conArr;
};

console.log(
  findTargetSubarraysTs([2, 3, 1, 2, 4, 1], 6)
);

// [
//   { start: 0, end: 2, sum: 6 },
//   { start: 1, end: 3, sum: 6 },
//   { start: 3, end: 4, sum: 6 }
// ]