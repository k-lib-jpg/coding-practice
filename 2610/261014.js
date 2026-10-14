// 文字列textを受け取り、同じ文字が重複せずに連続している部分文字列のうち、最も長いものの長さを返すlongestUniqueSubstringを作成してください。
const longestUniqueSubstring = (text) => {
 let left = 0;
 let maxLength = 0;
 const seen = new Set();
 for (let i = 0; i < text.length; i++) {
  while (seen.has(text[i])) {
   seen.delete(text[left]);
   left++;
  } 
  seen.add(text[i]);
  if (maxLength < seen.size) {
   maxLength = seen.size;
  }
 }
 return maxLength;
};

console.log(longestUniqueSubstring("abcabcbb"));
// 3 → "abc"

console.log(longestUniqueSubstring("bbbbb"));
// 1 → "b"

console.log(longestUniqueSubstring("pwwkew"));
// 3 → "wke"

console.log(longestUniqueSubstring("abba"));
// 2 → "ab" または "ba"

console.log(longestUniqueSubstring("dvdf"));
// 3 → "vdf"

console.log(longestUniqueSubstring(""));
// 0

console.log(longestUniqueSubstring("a"));
// 1

console.log(longestUniqueSubstring("abcdef"));
// 6