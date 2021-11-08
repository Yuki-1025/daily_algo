# time complexity O(nlogk)
class Solution(object):
    def kClosest(self, points, k):
        """
        :type points: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
        distances = []
        for point in points:
            distances.append(point[0] ** 2 + point[1] ** 2)

        heap = [];
        heapq.heappush(heap, (-distances[0], 0))
        k -= 1;
        for idx, d in enumerate(distances):
            if idx == 0:
                idx += 1
            elif k == 0 and -d > heap[0][0]:
                heapq.heappop(heap)
                heapq.heappush(heap, (-d, idx))
            elif k > 0:
                heapq.heappush(heap, (-d, idx))
                k -= 1
        res = []
        for h in heap :
            res.append(points[h[1]])
        return res
