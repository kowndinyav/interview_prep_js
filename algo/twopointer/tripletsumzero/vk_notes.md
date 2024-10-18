## Approach
- Sort array
- Take one item as the target sum and apply twoSum algo


## Handling non-duplicate tripes
- when there are contiguous duplicate elements skip them. otherwise, we get duplicate triplets.
```javascript
//skip condition on outer loop 
if(i > 0 && a[i] == a[i]) {
    continue
}
```

- when we find one solution, we should not break and continue. here important thing to remember is to skip duplicates for `left` pointer
```javascript
// skip condition when one solution is found 
while (a[left] == a[left-1] && left < right){
    left++
}
```

⚠️**Important:**  
- big thing that I always miss is the fact that when my pivot element is `i`, always start `left` with `i+1`. Usual mistake I do is I start with `0` again. Below is the representation of the same

``` javascript
[-5, -2, -1, 2, 3]

//pivot=0, left=1, right=4
-5, [(triplet_combs)] using [-2, -1, 2, 3]

//pivot=1, left=2, right=4
-2, [(triplet_combs)] using [-1, 2, 3]

//pivot=2, left=3, right=4
-1, [(triplet_combs)] using [2, 3]

//pivot=3, left=4, right=4
 2, [(triplet_combs)] using [3]
```