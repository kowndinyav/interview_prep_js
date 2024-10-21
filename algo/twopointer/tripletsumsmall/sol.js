function tripletSumSmall(nums, target){

    a = nums.sort((x,y) => x-y)
    console.log(a)

    let count = 0

    for (let i=0;i<a.length;i++){

        let l = i + 1
        let r = a.length - 1

        while (l < r){            
            let sum = a[i] + a[l] + a[r]

            if (sum >= target){
                r--
            }else{
                count += (r-l)
                l++
            }
        }
    }

    return count
}

console.log(tripletSumSmall([-1, 0, 2, 3], 3))
console.log(tripletSumSmall([-1, 4, 2, 1, 3],5))
