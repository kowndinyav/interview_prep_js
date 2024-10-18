
var threeSum = function(nums) {

    let ret = []    
    let a = nums.sort ((a,b) => a-b)

    for (let i=0;i<a.length;i++){

        if(i>0 && a[i] == a[i-1]){
            continue
        }

        let l = i + 1
        let r = a.length - 1

        while (l < r){
            if(a[i] + a[l] + a[r] > 0){
                r--
            }else if(a[i] + a[l] + a[r] < 0){
                l++
            }else{
                ret.push([a[i], a[l], a[r]])
                l++
                while (a[l] == a[l-1] && l < r){
                    l++
                }
            }
        }

    }

    return ret

}

