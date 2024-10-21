## Triplet Sum Close to Target (medium)
### Problem Statement
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

`Example 1:` <br>
Input: [-1, 0, 2, 3], target=3  <br>
Output: 2 <br>
Explanation: The triplet [-1, 0, 3] has the sum '2' which is closest to the target. <br>

There are two triplets with distance '1' from the target: [-1, 0, 3] & [-1, 2, 3]. Between these two triplets, the correct answer will be [-1, 0, 3] as it has a sum '2' which is less than the sum of the other triplet which is '4'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.<br>

`Example 2:` <br>
Input: [-3, -1, 1, 2], target=1 <br>
Output: 0 <br>
Explanation: The triplet [-3, 1, 2] has the closest sum to the target. <br>

`Example 3:` <br>
Input: [1, 0, 1, 1], target=100 <br>
Output: 3 <br>
Explanation: The triplet [1, 1, 1] has the closest sum to the target. <br>

`Example 4:` <br>
Input: [0, 0, 1, 1, 2, 6], target=5 <br>
Output: 4 <br>
Explanation: There are two triplets with distance '1' from target: [1, 1, 2] & [0, 0, 6]. Between these two triplets, the correct answer will be [1, 1, 2] as it has a sum '4' which is less than the sum of the other triplet which is '6'. This is because of the following requirement: 'If there are more than one such triplet, return the sum of the triplet with the smallest sum.' <br>

`Constraints:` <br>
3 <= arr.length <= 500 <br>
-1000 <= arr[i] <= 1000 <br>
-104 <= target <= 104