function closestSumTriplet(a, target){

    // i=0, l=1, r=n-1
    let res = Number.MAX_SAFE_INTEGER

    for (let i = 0;i<a.length;i++){

        let l = i + 1
        let r = a.length - 1

        while (l < r){

            let sum = a[i] + a[l] + a[r]

            if(sum == target){
                return sum
            }else{

                if(Math.abs(target-sum) < Math.abs(target - res)){
                    //if current is closer to target, remember it
                    res = sum
                }
                
                if(sum < target){
                    l++
                    while (l < r && a[l] == a[l-1]){
                        l++
                    }
                }else{
                    r--
                }

            }
        }
    }

    return res
}


console.log(closestSumTriplet([-1, 0, 2, 3], 3))
console.log(closestSumTriplet([-3, -1, 1, 2], 1))
console.log(closestSumTriplet([1, 0, 1, 1], 100))
console.log(closestSumTriplet([0, 0, 1, 1, 2, 6], 5))
console.log(closestSumTriplet([-5,-5,-4,0,0,3,3,4,5], -2))