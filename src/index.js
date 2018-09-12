/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    if (preferences[i] - 1 === i || preferences[i] - 1 < 0) continue;
    var secondIndex = preferences[i] - 1;

    if (preferences[secondIndex] === secondIndex + 1 || secondIndex < 0) continue;
    var thirdIndex = preferences[secondIndex] - 1;

    if (preferences[thirdIndex] === thirdIndex + 1 || thirdIndex < 0) continue;
    var firstIndex = preferences[thirdIndex] - 1;

    if (i === firstIndex)
      count++;
  }
  return count / 3;
  // your implementation
};
