## Pair with target sum

Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].

`Example 1`:<br>
Input: [1, 2, 3, 4, 6], target=6 <br>
Output: [1, 3] <br>
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

`Example 2:` <br>
Input: [2, 5, 9, 11], target=11 <br>
Output: [0, 2] <br>
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

`Constraints:` <br>
2 <= arr.length <= 104<br>
-109 <= arr[i] <= 109<br>
-109 <= target <= 109<br>
Only one valid answer exists.