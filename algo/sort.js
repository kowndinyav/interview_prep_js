/*
    Take away: sort by default uses string sort or alphabetical sort (UTF-16). So, sorting [10,5,20,4,35] and ["10","5","20","4","35"] should get us the same result
    Essentially comparator function returns a tri state -> -1, 0, 1 but not boolean
*/

let a = [10,5,20,4,35]
a.sort()
console.log(a)

let b = ["10","5","20","4","35"]
b.sort()
console.log(b)

let c = [10,5,20,4,35]
c.sort( (e1,e2) => e1-e2 )
console.log(c)
