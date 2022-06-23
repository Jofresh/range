// Only works for digit
function range(...args) {
    let [start, stop = 0, step = 1, reverse] = args

    if (stop === 0 && start > 0)
        [start, stop] = [stop, start]

    return createArray(start, stop, step, reverse)
}

function createArray(start, stop, step, reverse) {
    let length = getLength(start, stop, step)
    let arr = Array(length)
    
    // If we want a reversed array then we start from the end, from right to left
    let direction = 1                   // start = start + step 
    if (reverse) {
        [start, stop] = [stop, start]   // We swap `start` and `stop`
        start -= step                   // If we don't add this line, range(0, 9, 3, true) returns [9, 6, 3]
        direction = -1                  // Allows us to do, further : stop = stop - step
    }

    /*
     * We also could build the array and then call a function to reverse it
     * so we don't have to use the variable `direction`
     * Exemple : arr = reverseArray(arr)
     */

    let i = 0;
    while (i < length) {
        arr[i++] = start
        start = start + (direction * step)
    }

    // if (reverse) arr = reverseArray(arr)
    return arr
}

/*  function reverseArray(arr) {
 *      let i = arr.length, j = 0
 *      let reversed = Array(arr.length)
 *      while (i > 0)
 *          reversed[j++] = arr[--i]
 *      return reversed
 *  }
 */

function getLength(start, stop, step) {
    return Math.abs(Math.ceil((stop - start) / step))
}

module.exports = {
    range
}
