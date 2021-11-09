# Given an integer array nums and an integer k, return the kth largest element in the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct element.

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        # use a minheap to store top k
        heap = [];
        for num in nums:
            if len(heap) < k:
                heapq.heappush(heap, num)
            elif num > heap[0] :
                heapq.heappop(heap)
                heapq.heappush(heap, num)
        return heap[0];