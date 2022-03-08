function range(...args) {
    let [start, stop = 0, step = 1, reverse] = args

    if (stop === 0 && start > 0)
        [start, stop] = [stop, start]

    return createArray(start, stop, step, reverse)
}

// Construit le tableau
function createArray(start, stop, step, reverse) {
    let length = getLength(start, stop, step)
    let arr = new Array(length) // Créé un tableau de la taille calculée
    
    // Si on veut le tableau inversé alors on commence par la fin, en allant de droite à gauche.
    let direction = 1                   // start = start + step 
    if (reverse) {
        [start, stop] = [stop, start]   // On swap start et stop.
        direction = -1                  // stop = stop - step
    }

    let i = 0;
    while (i < length) {
        arr[i++] = start
        start = start + (direction * step)
    }

    return arr
}

// Calcule la taille du tableau en fonction des paramètres.
function getLength(start, stop, step) {
    return Math.abs(Math.ceil((stop - start) / step))
}

module.exports = {
    range
}
