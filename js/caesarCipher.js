function caesarCipher(str, shiftFactor) {
    let arr1 = getStringIndexArray(str);
    let arr2 = shiftStringIndexArray(arr1, shiftFactor);
    return convertShiftedArray(arr2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getLetter(index, isUpperCase) {
    return isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
}

function getStringIndexArray(str) {
    const alphabetIndex = (char) => {
        return alphabet.indexOf(char.toLowerCase());
    };

    let strArray = str.split('');
    let strIndexArray = strArray.map((char) => {
        if (isLetter(char)) {
            return {
                index: alphabetIndex(char),
                isUpperCase: char === char.toUpperCase() // Check if the letter is uppercase
            };
        } else {
            return char; // Keep non-letter characters as is
        }
    });

    return strIndexArray;
}

function shiftStringIndexArray(strIndexArray, shiftFactor) {
    let shiftedArray = strIndexArray.map((item) => {
        if (typeof item === 'object') { // If it's a letter object
            const newIndex = (item.index + shiftFactor + 26) % 26; // Ensure wrapping
            return {
                index: newIndex,
                isUpperCase: item.isUpperCase // Keep case information
            };
        } else {
            return item; // Keep non-letter characters as is
        }
    });

    return shiftedArray;
}

function convertShiftedArray(arr) {
    let finalArray = arr.map((item) => {
        if (typeof item === 'object') {
            return getLetter(item.index, item.isUpperCase); // Get letter with case
        } else {
            return item; // Keep non-letter characters as is
        }
    });

    return finalArray.join(''); // Join the final array into a string
}

function isLetter(c) {
    return typeof c === 'string' && c.length === 1 && c.toLowerCase() !== c.toUpperCase();
}

module.exports = caesarCipher;