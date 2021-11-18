// You have an inventory of different colored balls, and there is a customer that wants orders
//balls of any color.

// The customer weirdly values the colored balls. Each colored ball's value is the number of
//balls of that color you currently have in your inventory. For example, if you own 6 yellow balls,
// the customer would pay 6 for the first yellow ball. After the transaction, there are only 5 yellow balls left, so the next yellow ball is then valued at 5 (i.e., the value of the balls decreases as you sell more to the customer).

// You are given an integer array, inventory, where inventory[i] represents the number of balls of
// the ith color that you initially own. You are also given an integer orders, which represents the
// total number of balls that the customer wants. You can sell the balls in any order.

// Return the maximum total value that you can attain after selling orders colored balls. As the answer may be too large, return it modulo 109 + 7.

var maxProfit = function(inventory, orders) {
  // edge case: only one color
  var res = 0;
  if (inventory.length === 1) {
      while (orders > 0) {
          res += inventory[0];
          inventory[0] --;
          orders --;
      }
      console.log(res);
      return res % 1000000007;
  }
  //
  var heap = new MaxPriorityQueue();
  for (let i = 0; i <inventory.length; i++) {
      heap.enqueue(inventory[i]);
  }
  while (orders > 0) {
      let curr = heap.dequeue().priority;
      res += curr;
      curr --;
      heap.enqueue(curr);
      orders --;
  }
  return BigInt(res) % BigInt(1000000007);
};