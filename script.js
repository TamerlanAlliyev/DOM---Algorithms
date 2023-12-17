// TASK - 1. Verilən ədədin palindrom olub olmamasını yoxlayan funksiya yazmaq

// TASK - 2. Verilən iki dəyərin bir birinə anagram olub olmamasını yoxlayan funksiya yazmaq

// TASK - 3. 1-dən 100-ə qədər ədədləri console-da yazmaq. Əgər ədəd 3-ə tam bölünürsə console-da həmin ədədin əvəzinə Fizz, əgər 5-ə tam bölünürsə Buzz, əgər 15-ə tam bölünürsə FizzBuzz yazmaq



console.log("********** TASK - 1 **********")
const number = "525";

let palindromeNumber = number.split('').reverse().join('');
let checkNumberIsPaliindrom = () => {
    if(number === palindromeNumber){
        return "this pattern is a palindrome"
    }
    else
    {
        return "this pattern is not a palindrome"
    }
}

console.log(checkNumberIsPaliindrom());





console.log("********** TASK - 2 **********")

let word1 = prompt("Enter word 1 to check anagram words");
let word2 = prompt("Enter word 2 to check");

let reverseWord = word2.split("").reverse().join('');
let checkWord = () => {
    if(reverseWord === word1){
        return alert(`The words " ${word1} " and " ${word2} " you entered are anagrams`)
    }
    else{
        return alert(`The words " ${word1} " and " ${word2} " you entered are NOT anagrams`)
    }
}

console.log(checkWord());  



console.log("********** TASK - 3 **********")

for (let i = 0; i <= 100; i++) {
    if(i%3===0){
        console.log("Fizz")
    }
    else if (i%5===0){
        console.log("Buzz")
    }
    else if(i%15===0){
        console.log("FizzBuzz")
    }else{
        console.log(i)
    }
    
}