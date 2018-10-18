# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        node = head
        previous = None

        while node:
            nextNode = node.next
            
            # Flip from previous -> node to node -> previous
            # print("%d -> %d" % (node.val, previous.val))
            node.next = previous
            
            previous = node
            node = nextNode
        
        return previous
