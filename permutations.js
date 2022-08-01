/*
Tags: permutations, recursion
*/

function generate_permutations(list_num, path){

    if(list_num.length == 0){
        //terminating condition
        console.log(path.reduce ((a,b) => a + "" + b))
        return
    }

    list_num.forEach( (element, picked_index) => {
        
        //create copy
        let working_copy_list_num = list_num.slice(0)
        let working_copy_path = path.slice(0)

        //operate
        //remove picked element from the array and add to path
        working_copy_list_num.splice(picked_index, 1)
        working_copy_path.push(list_num[picked_index])

        //go on to the next
        generate_permutations(working_copy_list_num, working_copy_path)

    });

}

let a = [1,2,3,4]
generate_permutations(a, [])