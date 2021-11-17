// QUESTION: given a graph, count the triangles that are formed by graph edges

// first, create adjacency matrix to represent the graph

// second, check every triplet of vertices to check if they form a triangle
var triangleCount = 0;
for (let i = 0; i < len; i ++) {
  for (let j = i + 1; j < len; j++) {
    if (adjacency[i][j]) {
      for (let k = j + 1; k < len; k++) {
        if (adjacency[i][k] && adjacency[j][k]) triangleCount ++;
      }
    }
  }
}
// O(n^3);

// similar topic: 547 number of provinces
var countProvince = (adjacency) => {
  var len = adjacency.length; // city numbers
  var visited = Array(len).fill(false);
  var count = 0;
  for (let i = 0; i < len; i ++) {
    if (!visited[i]) {
      count ++;
      let q = [i];
      while (q.length) {
        let curr = q.shift();
        visited[curr] = true;
        adjacency[curr].forEach((adj, idx) => {
          if (adj === 1 && idx !== curr && !visited[idx]) q.push(idx);
        })
      }
    }
  }
  return count;
}