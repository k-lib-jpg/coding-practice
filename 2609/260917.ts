const longestEvenStreakTs = (numbers:number[]):number => {
 let count:number = 0;
 let max:number = 0;
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
      if (count > max) {
      max = count;
    } 
  } else {
      count = 0;
  }
 }
 return max;
}