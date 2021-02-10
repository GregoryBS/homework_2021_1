'use strict'

/***
 * Сreates a new array with all sub-array elements concatenated into it
 *
 * @param {Array} originalArray - initial multi-array
 * @returns {Array}
 */
const plain = (originalArray) => {
    if (!Array.isArray(originalArray)) return undefined;

    return originalArray.reduce((result, currentItem) => {
        return result.concat(Array.isArray(currentItem) 
                                ? plain(currentItem) 
                                : currentItem);
    }, []);
};
