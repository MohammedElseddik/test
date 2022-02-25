module.exports = function scanString(str) {
  // Write your code here
  return str.toLowerCase().replace(/[^a-zd]/g, '').split('').sort().join('');
}

function isAnagram(stringA, stringB) {
  if (scanString(stringA) === scanString(stringB)) {
    return true;
  } else {
    return false;
  }
};