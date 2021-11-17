// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] =
// [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1

var countComponents = function(n, edges) {
  // edge case
  if (!edges.length) return n;
  // build relationship map
  var map = {};
  for (let e of edges) {
      if (!map[e[0]]) map[e[0]] = [];
      map[e[0]].push(e[1]);
      if (!map[e[1]]) map[e[1]] = [];
      map[e[1]].push(e[0]);
  }
  // traverse the graph
  var res = 0;
  var visited = Array(n).fill(0);
  for (let i = 0; i < n; i ++) {
      if (!visited[i]) {
          let q = [i];
          res ++;
          while(q.length) {
              let curr = q.shift();
              visited[curr] = 1;
              if (map[curr]) {
                  for (let neighbor of map[curr]) {
                      if (!visited[neighbor]) q.push(neighbor);
                  }
              }
          }
      }
  }
  return res;
};