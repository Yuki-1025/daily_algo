// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You
//are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
//course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid
//answers, return any of them. If it is impossible to finish all courses, return an empty array.

var findOrder = function(numCourses, prerequisites) {
  // create an obj to store relationship
  // create indegree count for each course
  var map = {};
  var indegree = Array(numCourses).fill(0);
  for (let p of prerequisites) {
      if (!map[p[0]]) {
          map[p[0]] = [];
      }
      map[p[0]].push(p[1]);
      indegree[p[1]] ++;
  }

  // BFS
  var q = [];
  for (let i = 0; i < indegree.length; i ++) {
      if (indegree[i] === 0) {
          q.push(i);
      }
  }
  var ordered = [];
  while (q.length > 0) {
      let curr = q.shift();
      if (map[curr] !== undefined) {
          for (let course of map[curr]) {
              indegree[course] --;
              if (indegree[course] === 0) {
                  q.push(course);
              }
          }
      }
      ordered.unshift(curr);
  }
  return ordered.length === numCourses ? ordered : [];
};