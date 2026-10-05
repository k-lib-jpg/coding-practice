//2つの文字列text1とtext2を受け取り、**使われている文字とその個数が完全に同じならtrue、違えばfalse**を返すisAnagramを作ってください。
const isAnagram = (text1, text2) => {
 if (text1.length !== text2.length) {
  return false;
 }
 const counts = new Map();
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

console.log(isAnagram("listen", "silent"));
// true

console.log(isAnagram("hello", "olleh"));
// true

console.log(isAnagram("hello", "world"));
// false

console.log(isAnagram("aabb", "abab"));
// true

console.log(isAnagram("aabb", "abbb"));
// false

console.log(isAnagram("abc", "abcd"));
// false

console.log(isAnagram("", ""));
// true