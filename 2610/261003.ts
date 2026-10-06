const firstUniqueCharacterTs = (text: string): string | undefined => {
  const counts = new Map<string, number>();

  for (const char of text) {
    const nowCounts = counts.get(char) ?? 0;
    const newCounts = nowCounts + 1;
    counts.set(char, newCounts);
  }

  for (const char of text) {
    if (counts.get(char) === 1) {
      return char;
    }
  }

  return undefined;
};


console.log(
  firstUniqueCharacterTs("aabbcddee")
);
// "c"

console.log(
  firstUniqueCharacterTs("leetcode")
);
// "l"

console.log(
  firstUniqueCharacterTs("aabbcc")
);
// undefined
