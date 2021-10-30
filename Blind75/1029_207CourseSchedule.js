// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

var canFinish = function(numCourses, prerequisites) {
  // build relationship in map
  var map = {};
  var inDegree = Array(numCourses).fill(0);
  for (let pair of prerequisites) {
      if (!map[pair[0]]) {
          map[pair[0]] = [];
      }
      map[pair[0]].push(pair[1]);
      inDegree[pair[1]] ++;
  }
  // BFS start from root
  var q = [];
  for (let i = 0; i < inDegree.length; i ++) {
      if (inDegree[i] === 0) {
          q.push(i);
      }
  }
  var ordered = [];
  if (!q.length) return false;
  while (q.length) {
      let curr = q.shift();
      ordered.push(curr);
      if (map[curr]) {
          for (let next of map[curr]) {
              inDegree[next] --;
              if (inDegree[next] === 0) {
                  q.push(next);
              }
          }
      }
  }
  return ordered.length === numCourses;
};

//======DFS runtime exceeded version=======
var canFinish = function(numCourses, prerequisites) {
  // build relationship in map
  var map = {};
  for (let pair of prerequisites) {
      if (!map[pair[0]]) {
          map[pair[0]] = [];
      }
      map[pair[0]].push(pair[1]);
  }

  var res = true;
  const traverse = (course, depth) => {
      if (map[course] !== undefined) {
          if (depth <= numCourses) {
              //visited[course] = 1;
              depth ++;
              for (let c of map[course]) {
                  traverse(c, depth);
              }
          } else {
              res = false;
          }

      }
  }

  for (let i = 0; i < prerequisites.length; i ++) {
      let depth = 1;
      traverse(prerequisites[i][0], depth)
  }

  return res;
};