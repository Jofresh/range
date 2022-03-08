function range(...args) {
    let [start, stop = 0, step = 1, reverse] = args

    if (stop === 0 && start > 0)
        [start, stop] = [stop, start]

    return createArray(start, stop, step, reverse)
}

// Construit le tableau
function createArray(start, stop, step, reverse) {
    let length = getLength(start, stop, step)
    let arr = Array(length) // Créé un tableau de la taille calculée
    
    // Si on veut le tableau inversé alors on commence par la fin, en allant de droite à gauche
    let direction = 1                   // start = start + step 
    if (reverse) {
        [start, stop] = [stop, start]   // On swap "start" et "stop"
        start -= step                   // Si on ajoute pas cette ligne, (0,9,3,true) donne [9,6,3]
        direction = -1                  // Permet de faire : stop = stop - step
    }

    /*
     * On pourrait aussi construire le tableau dans le bon sens puis
     * appeler une fonction (reversedArray), dans laquelle on passerait en paramètre le tableau construit,
     * qui nous renverrait le tableau inversé, pour se passer de la variable direction 
     */

    let i = 0;
    while (i < length) {
        arr[i++] = start
        start = start + (direction * step)
    }

    // if (reverse) arr = reverseArray(arr)
    return arr
}

/* 
 *  function reverseArray(arr) {
 *      let i = arr.length, j = 0
 *      let reversed = Array(arr.length)
 *      while (i > 0)
 *          reversed[j++] = arr[--i]
 *      return reversed
 *  }
 */

// Calcule la taille du tableau
function getLength(start, stop, step) {
    return Math.abs(Math.ceil((stop - start) / step))
}

module.exports = {
    range
}
