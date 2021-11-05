// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// DFS
var cloneGraph = function(node) {
  if (node == null) return null;
  var visited = {}; // use obj to store 各个节点
  var dfs = function(node) {
      //if (node === null) return null;
      if (!visited[node.val]) {
          visited[node.val] = new Node(node.val);
      }
      if (node.neighbors && node.neighbors.length > 0) {
          for (let n of node.neighbors) {
            //已有neighbor节点的 直接push节点，没有的话，新建节点push后 再以新节点为root开始dfs
              if (visited[n.val]) {visited[node.val].neighbors.push(visited[n.val]);}
              else {
                  visited[n.val] = new Node(n.val);
                  visited[node.val].neighbors.push(visited[n.val]);
                  dfs(n);
              }
          }
      }
  }
  dfs(node);
  return visited[1];
};