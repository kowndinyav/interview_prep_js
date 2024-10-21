# Triplets with Smaller Sum (medium)
## Problem Statement
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

### Example 1:
Input: [-1, 0, 2, 3], target=3 <br>
Output: 2 <br>
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2] <br>

### Example 2:
Input: [-1, 4, 2, 1, 3], target=5  <br>
Output: 4 <br>
Explanation: There are four triplets whose sum is less than the target:  
[-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

### Constraints:
n == arr.length <br>
0 <= n <= 3500 <br>
-100 <= arr[i] <= 100 <br>
-100 <= target <= 100