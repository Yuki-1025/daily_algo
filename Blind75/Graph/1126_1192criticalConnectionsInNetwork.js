// There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.

// Input: n = 2, connections = [[0,1]]
// Output: [[0,1]]

An edge is a critical connection, if and only if it is not in a cycle.
// DFS
var criticalConnections = function(n, connections) {
  // create graph: Array with each node as element
  var graph = Array(n);
  for (let i = 0; i < n; i++) {
      graph[i] = {val: i, adj: [], rank: -Infinity, minR: Infinity};
  }
  for (let [i, j] of connections) {
      graph[i].adj.push(j);
      graph[j].adj.push(i);
  }

  var visited = Array(n).fill(0);
  var res = [];
  const dfs = (node, parent, rank) => {
      // console.log(node, parent);
      // visit node
      node.rank = rank;
      node.minR = rank; // by default minR = rank
      visited[node.val] = 1;

      // visit node's adj and update minR
      for (let a of node.adj) {
          if (a === parent) continue;// e.g 0既是1的parent也是child
          if (visited[a]) {
              node.minR = Math.min(node.minR, graph[a].minR);
          } else {
              node.minR = Math.min(node.minR, dfs(graph[a], node.val, rank+1))
          }
          if (node.rank < graph[a].minR) res.push([node.val, a]);
      }
      return node.minR;
  }
  dfs(graph[0], -1, 0);
  return res;
};

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