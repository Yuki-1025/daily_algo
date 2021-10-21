/* amazon is hosting a team hackathon
1.each team will have exactly teamSize developers
2.a developer's skill level is denoted by skill[i]
3.the differene between the maximum and minimum skill levelsl within a team cannot exceed a
threshold, maxDiff

determin the maximum number of teams that can be formed from the contestants

example:
skill=[3,4,3,1,6,5]
teamSize = 3;
maxDiff = 2
*/

function findMaxTeam(skill, size, maxDiff) {
  //edge case
  if (size > skill.length) {
    return 0;
  }
  // sort first
  skill.sort((a, b) => {
    return a - b;
  })

  var diff;
  var i = 0, count = 0, j = i + size - 1;
  while (i < skill.length && j < skill.length) {
    diff = Math.max.apply(null, skill.slice(i, j + 1)) - Math.min.apply(null, skill.slice(i, j + 1));
    if (diff <= maxDiff) {
      i += size;
      j = i + size -1;
      count ++;
    } else {
      i ++;
      j ++;
    }
  }
  return count;
}
// test case
var skill = [3,4,3,1,6,5];
var teamSize = 3;
var maxDiff = 2;

