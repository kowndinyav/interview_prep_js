function sorted_fn(a, l , r){
    if (a[l] < a[r]){
        return true
    }

    return false
}

function minwindowsort(a){
    let left = 0
    let right = left + 1
    let sorted = true
    let mw = {}
    mw.w1 = undefined
    mw.w2 = undefined
    
    while (right < a.length){
    
        sorted = sorted_fn(a, left, right)
    
        if(sorted){
            left = right
            right++
        }else{
        
            if(mw.w1 == undefined){
                // remember the left of the min window sort
                mw.w1 = left
            }
            mw.w2 = right
            
            sorted = false
            right++
        }
    }

    return mw
}



let input1 = [1, 2, 5, 3, 7, 10, 9, 12]
let mw = minwindowsort(input1)
window_length = mw.w2 - mw.w1 + 1
console.log(`input1 min_sort_window = (${mw.w1}, ${mw.w2}), length=${window_length}`)

let input2 = [1, 3, 2, 0, -1, 7, 10]
mw = minwindowsort(input2)
window_length = mw.w2 - mw.w1 + 1
console.log(`input2 min_sort_window = (${mw.w1}, ${mw.w2}), length=${window_length}`)