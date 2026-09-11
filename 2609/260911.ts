const doubleOverFiveTs = (numbers: number[]): number[] => {
  const doubleNumbers: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
      doubleNumbers.push(numbers[i] * 2);
    }
  }

  return doubleNumbers;
};