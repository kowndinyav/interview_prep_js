function sortedSquareList(a){

    let l = 0
    let r = a.length - 1
    let squaredList = []

    while (l <= r){

        if(a[r]*a[r] > a[l]*a[l]){
            squaredList.push(a[r]*a[r])
            r--
        }else{
            squaredList.push(a[l]*a[l])
            l++
        }
    }

    return squaredList

}

let input = [-2, -1, 0, 2, 3]
console.log(sortedSquareList(input))

input = [-20, -10, -5, 0, 6, 8]
console.log(sortedSquareList(input))

//same solution that works for rotated array
input = [20, 10, 5, 0, 6, 8]
console.log(sortedSquareList(input))
