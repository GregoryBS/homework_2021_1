'use strict';

/***
 * Сreates a new array with all sub-array elements concatenated into it
 *
 * @param {Array} argArray - initial multi-array
 * @returns {Array}
 */
const plain = (argArray) => {
    const func = (arg, result) => {
        if (Array.isArray(arg)) {
            arg.forEach((element) => result = func(element, result));
            return result;
        }
        return result.concat(arg);
    };

    return Array.isArray(argArray) ? func(argArray, []) : undefined;
};
