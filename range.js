function range(...args) {
    let [start, stop = 0, step = 1, reverse] = args

    if (stop === 0 && start > 0)
        [start, stop] = [stop, start]

    return createArray(start, stop, step, reverse)
}

function createArray(start, stop, step, reverse) {
    let length = getLength(start, stop, step)
    let arr = new Array(length)

    let direction = reverse ? -1 : 1
    if (reverse) [start, stop] = [stop, start]

    let i = 0;
    while (i < length) {
        arr[i++] = start
        start = start + (direction * step)
    }

    return arr
}

function getLength(start, stop, step) {
    return Math.abs(Math.ceil((stop - start) / step))
}

module.exports = {
    range
}
