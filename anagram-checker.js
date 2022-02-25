module.exports = function createCharMap(str) {
  // Write your code here
  const map = {};
  const normalizedString = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of normalizedString) {
    map[char] = map[char] + 1 || 1;
  }

  return map;
};

function isAnagram(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}
