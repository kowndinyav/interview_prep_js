
function closestSumTriplet(nums, targetSum){
    
    
    
    let N = nums.length    
    let a = nums.sort ((a,b) => a-b)

    let globalMinDistance = Number.MAX_SAFE_INTEGER
    let globalMinSum = Number.MAX_SAFE_INTEGER
    
    for (let i=0;i < N;i++){

        let l = i + 1
        let r = N - 1
        
        while (l < r){

            let sum = a[l] + a[r] + a[i]
            let distance = Math.abs(targetSum - sum)

            if(distance == 0){
                return sum
            }

            if(distance < globalMinDistance){
                globalMinDistance = distance
                globalMinSum = sum
            }
            
            if(distance < globalMinDistance){
                l++
                while (l<r && a[l] == a[l-1]){
                    l++
                }
            }else if(distance > globalMinDistance){
                r--
            }else{
                //don't know what to because distance and globalMinDistance are the same
                //I can do l++ or r-- but in either cases, it won't work
                /*
                [-5,-5,-4,0,0,3,3,4,5]
                [ i, -, -,L,-,-,-,-,R] - at this point, distance -> (-2 - (-5 + -4 + 5)) = -2, l++
                [ i, -, -,-,L,-,-,-,R] - at this point, distance is (-2 - (-5+0+5)) = -2, globalMinDistance was -2, l++
                [ i, -, -,-,-,L,-,-,R] - PROBLEM!!!! ideally right should start moving bacl so that we reach

                [ i, -, -,-,L,R,-,-,-] - SOLUTION
                */
            }
            
        }
    }
    return globalMinSum
}

console.log(closestSumTriplet([-1, 0, 2, 3], 3))
console.log(closestSumTriplet([-3, -1, 1, 2], 1))
console.log(closestSumTriplet([1, 0, 1, 1], 100))
console.log(closestSumTriplet([0, 0, 1, 1, 2, 6], 5))
console.log(closestSumTriplet([-5,-5,-4,0,0,3,3,4,5], -2))