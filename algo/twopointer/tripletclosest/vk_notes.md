## Solution 
Solution is almost same as triplet-sum-zero but with minor modifications. There are 3 cases as usual
- case 1 - `(a[i] + a[l] + a[r]) < target` <br>
`Interpretation`: since the sum less than the target, we need to go for next bigger element in the array and so `increment L`

- case 1 - `(a[i] + a[l] + a[r]) > target` <br>
`Interpretation`: since the sum greater than the target, we need to go for next smaller element in the array and so `decrement R`

- case 1 - `(a[i] + a[l] + a[r]) == target` <br>
`Interpretation`: since the sum equal to target, that is the solution, just return from here

## My fumbles
- I started working of the branching of the code based on the distance rather the sum i.e, I computed current distance and compare that with previos distance and tried to interpret the same way as above i.e, like below


- case 1 - `distance < globalMinDistance` <br>
`Interpretation`: since current distance is less than what have seen so far, it means we are in downward trend and so, we need to go for next bigger element in the array and so `increment L`

- case 1 - `distance > globalMinDistance` <br>
`Interpretation`: since current distance is greater than what we have seen so far, it is better to decrease the sum and so, we need to go for next smaller element in the array and so `decrement R`

- case 1 - `distance == globalMinDistance` <br>
`Interpretation`: This is where the problem is!! <br>
Here we don't know what to do as global minimum is same as local minimum. <br>
    - should I `L++`?
    - should I `R--`?

Look at the case below
```
[-5,-5,-4,0,0,3,3,4,5]
[ i, -, -,L,-,-,-,-,R] - at this point, distance = -2, L++

[ i, -, -,-,L,-,-,-,R] - at this point, distance = -2, globalMinDistance was -2, L++

[ i, -, -,-,-,L,-,-,R] - PROBLEM!!!! ideally right should start moving bacl so that we reach

[ i, -, -,-,L,R,-,-,-] - SOLUTION
```