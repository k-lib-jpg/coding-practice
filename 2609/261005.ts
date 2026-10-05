const isAnagramTs = (text1: string, text2: string): boolean => {
 if (text1.length !== text2.length) {
  return false;
 }
 const counts = new Map<string, number>();
 for(const char of text1) {
  const oldCount = counts.get(char) ?? 0;
  const newCount = oldCount + 1;
  counts.set(char, newCount); 
 }
 for (const char of text2) {
  const count = counts.get(char);
  if (count === undefined || count === 0) {
   return false;
  }
  counts.set(char, count - 1);
 }
 return true;
}

console.log(isAnagramTs("listen", "silent"));
// true

console.log(isAnagramTs("hello", "olleh"));
// true

console.log(isAnagramTs("hello", "world"));
// false