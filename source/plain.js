'use strict';

/* 
Зачем у каждого в PR требовать JSDoc, если можно было написать об этом или 
хотя бы намекнуть на это в условии? К тому же это индивидуальное дз, кому 
здесь нужно это описание параметров?
*/
/***
 * Сreates a new array with all sub-array elements concatenated into it
 *
 * @param {Array} array - initial multi-array
 * @returns {Array}
 */
const plain = argArray => {
    let func = (arg, result) => {
        if (Array.isArray(arg)) {
            for (let elem of arg) {
                result = func(elem, result);
            }
            return result;
        }
        return result.concat(arg);
    };

    return Array.isArray(argArray) ? func(argArray, []) : [];
};