//-----------1
/* function upperCaseLetter(text) {
    let words = text.split(' '); 
    let firstCapitalizeWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    });
    return firstCapitalizeWords.join(' '); 
}

let text = "learn javascript hard";
let res = upperCaseLetter(text);
console.log(res); */

//--------------2

/* function isPalindrome(str){
    str=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr=str.split('').reverse().join('');
    return str===reversedStr;
}
let text1="Madam, in Eden, I'm Adam"
let text2="Hello, guys!"
console.log(isPalindrome(text1));// если это палиндром то true
console.log(isPalindrome(text2)); */


//-------------3
/* 
function modifyString(str, char, toUpperCase) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase() === char.toLowerCase()) {
            if (toUpperCase) {
                strArr[i] = strArr[i].toUpperCase();
            } else {
                strArr[i] = strArr[i].toLowerCase();
            }
        }
    }
    return strArr.join('');
}

console.log(modifyString("Jhon Doe", "e", true)) // output: "Jhon DoE"; 
console.log(modifyString("Jhon Doe", "j", false)) // output: "jhon Doe"
console.log(modifyString("Jhon Doe", "o", true)) // output: "jhOn DOe");
 */