/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's 
corresponding value squared in the second array. The frequency of values
 must be the same.
*/
function same(arr1, arr2) {

}

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
///


// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1
// use a frequencyCounter no nested loops

function maxChar(mander){
    const charFrequency = {};

    for(let char of mander){
        if(!charFrequency[char]){
            charFrequency[char]=1;
        } else {
            charFrequency[char] ||;
        }
    }

    let maxChar = "";
    let maxFrequency= 0;

    for(let char in charFrequency){
        if(charFrequency[char] > maxFrequency){
            maxChar=char;
            maxFrequency = charFrequency
        }
    }

}

maxChar("abcccccccd") // === "c"
maxChar("apple 1231111") // === "1


////
function validAnagram(arr1, arr2){

}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true




