const longestUniqueSubstringTs = (text: string): number => {
 let left = 0;
 let maxLength = 0;
 const seen = new Set<string>();
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

console.log(longestUniqueSubstringTs("abcabcbb"));
// 3 → "abc"

console.log(longestUniqueSubstringTs("bbbbb"));
// 1 → "b"
