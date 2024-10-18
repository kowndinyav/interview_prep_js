/*

- when there are duplicate elements skip them. otherwise, we get duplicate triplets. in case of sorted array, we can do this by checking adjacent elements and skip
- big thing that I always miss is the fact that if we start with i=0, we are finding all combinations with `i` that form 0 as sum. this means, once we are done with
finding tuples starting i=0, it means, no other combnitation will have i=0 when we move forward. and so, we should always start our l with i + 1

[-5, -2, -1, 2, 3]
-5, [(triplet_combs)] using [-2, -1, 2, 3]
-2, [(triplet_combs)] using [-1, 2, 3]
-1, [(triplet_combs)] using [2, 3]
 2, [(triplet_combs)] using [3]


*/

function targetSum2(a, pivot, sum){
    let triplets = []
    
    // [FOCUS]: KEY thing that got missed
    let l = pivot+1
    
    
    let r = a.length - 1
    
    while (l < r){

        if (l == pivot){
            // if l is pivot, just skip and move on
            l++
            continue
        }

        if (r == pivot){
            // if r is pivot, just skip and move on
            r--
            continue
        }
        
        if (a[l] + a[r] == sum){    
            triplets.push([a[pivot], a[l], a[r]])

            l++
            while (l < r && a[l] == a[l-1]){
                l++
            }
        
        }else if(a[l] + a[r] > sum){
            r--
        }else{
            l++

        }
    }

    return triplets
}

function searchTriplets(nums){

    let res = []

    // O(N * logN)
    let arr = nums.sort ((a,b) => a-b)
    console.log(arr)

    // O (N * N)
    for(let i=0;i<arr.length;i++){

        sum2 = -arr[i]

        if( i > 0 && arr[i] == arr[i-1]){
            continue
        }
        
        let triplets = targetSum2(arr, i, sum2)

        if (triplets.length != 0){
            res.push(...triplets)
        }        
    }

    return res
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]))
console.log(searchTriplets([-5, 2, -1, -2, 3]))
console.log(searchTriplets([0,0,0]))
console.log(searchTriplets([-1,0,1,0]))

