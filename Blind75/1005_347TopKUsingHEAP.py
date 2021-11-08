# in order to use HEAP
# and python only have built-in min-heap

class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1
        heap = []
        for key in count:
            heapq.heappush(heap, (-count[key], key))

        res = []
        while k > 0:
            res.append(heapq.heappop(heap)[1])
            k -= 1

        return res
