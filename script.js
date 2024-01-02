// TASK - 1. Verilən ədədin palindrom olub olmamasını yoxlayan funksiya yazmaq

// TASK - 2. Verilən iki dəyərin bir birinə anagram olub olmamasını yoxlayan funksiya yazmaq

// TASK - 3. 1-dən 100-ə qədər ədədləri console-da yazmaq. Əgər ədəd 3-ə tam bölünürsə console-da həmin ədədin əvəzinə Fizz, əgər 5-ə tam bölünürsə Buzz, əgər 15-ə tam bölünürsə FizzBuzz yazmaq



console.log("********** TASK - 1 **********")
const value = "525";

// let palindromeValue = value.split('').reverse().join('');
let checkPaliindrom = (val) => {
    let palindromeValue = "";

    for (let i = val.length - 1; i >= 0; i--) {
        palindromeValue += val[i];
    }

    if (val === palindromeValue) {
        return "this pattern is a palindrome"
    }
    else {
        return "this pattern is not a palindrome"
    }
}

console.log(checkPaliindrom(value));




console.log("********** TASK - 2 **********");

let word1 = prompt("Enter word 1 to check for anagrams");
let word2 = prompt("Enter word 2 to check");

const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }

    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
};

if (isAnagram(word1, word2)) {
    console.log(`The words "${word1}" and "${word2}" you entered are anagrams.`);
    alert(`The words "${word1}" and "${word2}" you entered are anagrams.`);
} else {
    console.log(`The words "${word1}" and "${word2}" you entered are NOT anagrams.`);
    alert(`The words "${word1}" and "${word2}" you entered are NOT anagrams.`);
}




console.log("********** TASK - 3 **********")

for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("Buzz")
    }
    else if (i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }

}
