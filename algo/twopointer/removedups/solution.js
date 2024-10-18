/*
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after moving element will be [2, 3, 6, 9]

*/

function removeDupsSortedArray(arr){
    // code goes here
    let l = 0
    let r = l+1
    
    while(r < arr.length){
        if(arr[l] !== arr[r]){
            arr[l+1] = arr[r]
            l++
        }
        r++
    }

    return l+1
    
}

console.log(removeDupsSortedArray([2, 3, 3, 3, 6, 9, 9]))
console.log(removeDupsSortedArray([2, 2, 2, 11]))