// There are n cities labeled from 1 to n. You are given the integer n and an array connections
// where connections[i] = [xi, yi, costi] indicates that the cost of connecting city xi and city
// yi (bidirectional connection) is costi.

// Return the minimum cost to connect all the n cities such that there is at least one path between
// each pair of cities. If it is impossible to connect all the n cities, return -1,

// The cost is the sum of the connections' costs used.

//if the len of connections is m. then m*log(n)
var minimumCost = function(n, connections) {
  //if (!countComponents(n, connections)) return -1;
  // sort by cost
  connections.sort((a, b) => a[2] - b[2]);
  // use parents[] to store relationship, idx is child, nums on idx is the parent
  var parents = [];
  for (let i = 1; i <= n; i ++) parents[i] = i;
  // helper func, to find the origin
  var findParent = (num) => {
      while (num != parents[num]) {
          num = parents[num];
      }
      return num;
  }
  //start loop
  var cost = 0, edges = 0;
  for (let c of connections) {
      let parent1 = findParent(c[0]);
      let parent2 = findParent(c[1]);
      if (parent1 !== parent2) {
          parents[parent2] = parent1;
          cost += c[2];
          edges ++;
      }
  }
  return edges === n-1 ? cost : -1;
};