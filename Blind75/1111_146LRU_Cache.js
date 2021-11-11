// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = {};
  this.queue = [];
};

LRUCache.prototype.get = function(key) {
  let res;
  if (this.storage[key] === undefined) {
      res = -1;
  } else {
      res = this.storage[key];
      for (let i = 0; i < this.queue.length; i++) {
          if (this.queue[i] === key) {
              this.queue.splice(i, 1);
              break;
          }
      }
      this.queue.push(key);
  }
  return res;
};

LRUCache.prototype.put = function(key, value) {
  if (this.storage[key] !== undefined) {
      this.storage[key] = value;
      for (let i = 0; i < this.queue.length; i++) {
          if (this.queue[i] === key) {
              this.queue.splice(i, 1);
              break;
          }
      }
      this.queue.push(key);
  } else {
      if (this.queue.length < this.capacity) {
          this.storage[key] = value;
          this.queue.push(key);
      } else {
          let shifted = this.queue.shift();
          delete this.storage[shifted];
          this.storage[key] = value;
          this.queue.push(key);
      }
  }

};
