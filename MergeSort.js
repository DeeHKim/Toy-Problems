//Implement mergesort


function mergeSort(array){

    if (array.length < 2) {
        return array;
    }

    var middle = Math.floor(array.length / 2),
        left = array.slice(0, middle),
        right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result  = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}
