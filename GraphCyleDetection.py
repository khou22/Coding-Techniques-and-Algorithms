# Part of: https://leetcode.com/problems/course-schedule/description/

class Solution:
    def dfs(self, node, graph, visiting, visited):
        # print("\nCurrent:", node)
        # print("Visiting", visiting)
        # print("Visited", visited)
        
        if node in visited:
            return True

        if node in visiting:
            return False

        visiting.append(node) # Now officially visiting
        
        if node in graph: # Has children
            for child in graph[node]:
                if self.dfs(child, graph, visiting, visited) is False:
                    return False
        
        visiting.remove(node)
        visited.append(node)
        return True

    def canFinish(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        # If cycle, cannot finish
        
        graph = {}
        
        # Populate graph
        for prereq in prerequisites:
            key = prereq[0]
            dest = prereq[1]
            
            if key in graph:
                graph[key].append(dest)
            else:
                graph[key] = [dest]
        
        # Test for cycles
        visiting = []
        visited = []
        for node in graph:
            if node not in visited:
                if self.dfs(node, graph, visiting, visited) is False:
                    # print("There is a cycle")
                    return False
        
        return True