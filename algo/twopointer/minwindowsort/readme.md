## Problem Statement
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

### Example 1:
`Input`: [1, 2, 5, 3, 7, 10, 9, 12] <br>
`Output`: 5 <br>
`Explanation`: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

### Example 2:
`Input`: [1, 3, 2, 0, -1, 7, 10] <br>
`Output`: 5 <br>
`Explanation`: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted

### Example 3:
`Input`: [1, 2, 3] <br>
`Output`: 0 <br>
`Explanation`: The array is already sorted <br>

### Example 4:
`Input`: [3, 2, 1] <br>
`Output`: 3 <br>