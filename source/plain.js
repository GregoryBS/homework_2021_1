'use strict'

/***
 * Сreates a new array with all sub-array elements concatenated into it
 *
 * @param {Array} originalArray - initial multi-array
 * @returns {Array}
 */
const plain = (originalArray) => {
    if (!Array.isArray(originalArray)) throw TypeError("Invalid input param");

    return originalArray.reduce((result, currentItem) => {
        let pieceOfArray = Array.isArray(currentItem) 
            ? plain(currentItem) 
            : currentItem;
        return result.concat(pieceOfArray);
    }, []);
};
