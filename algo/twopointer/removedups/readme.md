# Find Non-Duplicate Number Instances (easy)
## Problem Statement
Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The non-duplicate numbers should be sorted and you should not use any extra space so that the solution has constant space complexity i.e., .

Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

`Example 1:`<br>
Input: [2, 3, 3, 3, 6, 9, 9] <br>
Output: 4 <br>
Explanation: The first four elements after moving element will be [2, 3, 6, 9]. <br>

`Example 2:` <br>
Input: [2, 2, 2, 11] <br>
Output: 2 <br>
Explanation: The first two elements after moving elements will be [2, 11]. <br>

`Constraints:` <br>
1 <= nums.length <= 3 * 104 <br>
-100 <= nums[i] <= 100 <br>
nums is sorted in non-decreasing order. <br>
