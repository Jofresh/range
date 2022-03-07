function range(...args) {
    if (args.length === 1) return Array.from({length: args[0]}, (x,i) => i)

    // if (args[0] > args[1]) return 'First argument has to be lower than the first one.'

    let start = args[0],
        stop = args[1],
        step = (args[2] || 1)
        reverse = args[3]
    
    return reverse ? getReversed(start, stop, step) : getArray(start, stop, step);
}

function getArray(start, stop, step) {
    let length = getLength(start, stop, step);
    return Array.from({length}, (item, index) => start + index * step)
}

function getReversed(start, stop, step) {
    let length = getLength(start, stop, step);
    return Array.from({length}, (item, index) => stop - (index + 1) * step)
}

function getLength(start, stop, step) {
    return Math.ceil((stop - start) / step);
}

module.exports = {
    range
}

// module.exports.range = range
// module.exports = range