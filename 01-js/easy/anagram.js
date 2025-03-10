/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str) {
  var array = str.split(""); // ["d","c","b","a"]
  array = array.sort();
  var sortedString = array.join("");
  return sortedString;
}

function isAnagram(str1, str2) {
  if (sort(str1) === sort(str2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
