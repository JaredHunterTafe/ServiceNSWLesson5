

// // String Extension Methods

// let sentence = "The quick brown fox jumps over the lazy dog."; // 43

// // 1 Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise

// function searchSentence(searchTerm){
//     return sentence.includes(searchterm)
// }
// console.log(searchSentence ("dog"))

// let findDog = (sentence.includes("dog"))
// console.log(findDog)

// // // 2 Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise.

// let hasLetter = (sentence.indexOf("s"))
// console.log(hasLetter)

// // // 3 Write a function that takes a string and returns the first three characters of that string.

// let firstThree = (sentence.substring(0,3))
// console.log(firstThree)

// // // 4 Write a function that takes a string and returns the last two characters of that string.

// let lastTwo = (sentence.substring (42,44))
// console.log(lastTwo)

// // // 5 Write a function that converts a string into an array of words where a word is any string separated by a space.

// let wordList = (sentence.split (" "))
// console.log(wordList)

// // 6 Write a function that counts the number of times a string appears inside the sentence string above.

// function countWord(searchString, searchWord){
//     let count = 0
//     let indexnumber = 0
//     while (true){
//         let indexOfSearchWord = searchString.indexOf(searchString, SearchWord)
//         if (indexOfSearchWord == 1) {
//             break
//         }
//         count++
//         indexNumber = indexOfSearchWord + 1
//     }
//     return count
// }

// let wordCounted = countWord(sentence, ("The"))
// console.log(wordCounted)


// function countOccurences(stringToSearch, searchTerm) {
//     let count = 0;
//     let startIndex = 0;
//     while (true) {
//       let index = stringToSearch.indexOf(searchTerm, startIndex);
//       if (index == -1) {
//         break;
//       }
//       count++;
//       startIndex = index + 1;
//     }
//     return count;
//   }
//   console.log(countOccurences(sentence, "bad"))

// // // Regular Expressions

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

// 1 Write a function that determines if a string contains a valid email address

// function findValidEmail(testString){
//     return EMAIL_REGEX.test(testString)
// }
// console.log(findValidEmail("EMail is jared.hunter@Service.nsw.gov.au"))

 
// 2 Write a function to find the index of the first character of a valid URL

function findindexOfValidURL(testString){
    return test.string.search(URL_REGEX);

}
console.log(findIndexOfValidURL("go to https://learn.sydneytafe.edu.au  "))