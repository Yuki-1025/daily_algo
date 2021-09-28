// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// input : array of arrays => matrix
// number of subgraphs
// breadth first search (BFS)
// O(n)

var findCircleNum = function(isConnected) {
  var count = 0;
  var n = isConnected.length;
  var record = Array(n).fill(false);
  const findAdjacent = (i) => {
      let adjacent = [];
      for (let j = 0; j < n; j ++) {
          if (isConnected[i][j] === 1 && j !== i) {
              adjacent.push(j);
          }
      }
      return adjacent;
  }
  for (let i = 0; i < n; i ++) {
      var queue = [];
      count ++;
      queue.push(i);
      record[i] = true;

      while (queue.length > 0) {
          //console.log('queue ', queue);
          let r = queue.shift(), adjacents = findAdjacent(r);
          for (let k = 0; k < adjacents.length; k ++) {
              if (!record[adjacents[k]]) {
                  record[adjacents[k]] = true;
                  queue.push(adjacents[k]);
                  count --;
              }
          }
      }

  }
  return count;
};