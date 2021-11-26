// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.

// Input: n = 2, connections = [[0,1]]
// Output: [[0,1]]

// WORKABLE BUT RUNTIME EXCEED=====================================================================
// start BFS from each node, the critical connect will be visited n times, others <n
var criticalConnections = function(n, connections) {
  // create relationship map
  var map = {};
  for (let [a, b] of connections) {
      if (!map[a]) map[a] = [];
      if (!map[b]) map[b] = [];
      map[a].push(b);
      map[b].push(a);
  }

  // BFS
  var freq = {};
  for (let i = 0; i < n; i++) {
      var q = [i];
      let visited = Array(n).fill(0);
      visited[i] = 1;
      while (q.length) {
          let curr = q.shift();
          for (let m of map[curr]) {
              if (!visited[m]) {
                  q.push(m);
                  visited[m] = 1;
                  let temp = [curr, m].sort();
                  if (!freq[temp]) freq[temp] = 0;
                  freq[temp] ++;
              }
          }
      }
  }

  var res = [];
  for (let k in freq) {
      if (freq[k] >= n) res.push(k.split(','));
  }
  return res;
};