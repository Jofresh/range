function range(...args) {
    let [start, stop = 0, step = 1, reverse] = args
    
    if (stop === 0 && start > 0) [start, stop] = [stop, start]

    if (reverse)
        return reversedArray(start, stop, step)
    else
        return invertArray(start, stop, step)
}

function invertArray(start, stop, step) {
    let length = size(start, stop, step)
    let arr = new Array(length)

    let i = 0;
    while (i < length) {
        arr[i++] = start
        start += step
    }

    return arr
}

function reversedArray(start, stop, step) {
    let length = size(start, stop, step)
    let arr = new Array(length)
    
    let i = 0
    stop -= step
    while (i < length) {
        arr[i++] = stop
        stop -= step
    }

    return arr
}

function size(start, stop, step) {
    return Math.ceil((stop - start) / step)
}

module.exports = {
    range
}
