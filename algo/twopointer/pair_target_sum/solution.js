function pairWithTargetSum(a, targetSum){

    let left = 0
    let right = a.length - 1

    //initialize return value with [-1, -1]
    let pair = [-1, -1]

    if (right <= 0){
        // if length of the array is <=1, return [-1, -1]
        return [-1, -1]
    }

    while (left < right){
        if (a[left] + a[right] == targetSum){
            pair[0] = left
            pair[1] = right
            break;
        }else if(a[left] + a[right] > targetSum){
            // if pair_sum is > target_sum, it means we need to reduce the right
            right--
        }else{
            // if pair_sum is < target_sum, it means we need to increase the left
            left++
        }
    }

    return pair
}


let input = [1, 2, 3, 4, 6]
let target = 6
console.log(pairWithTargetSum(input, target))

input = [2, 5, 9, 11]
target = 11
console.log(pairWithTargetSum(input, target))

input = [2]
target = 2
console.log(pairWithTargetSum(input, target))

input = []
target = 0
console.log(pairWithTargetSum(input, target))
