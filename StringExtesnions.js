
let sentence = "All you had to do was follow the damn train CJ"

let hasTrain = sentence.includes("train")
// console.log(hasTrain)
// console.log(sentence.includes(2))
// console.log(sentence.includes("f"))



let trainIndex = sentence.indexOf("train")


let notTrainIndex = sentence.indexOf("not")
console.log(trainIndex)
console.log(notTrainIndex)

// let sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.substring(0,3)); // Outputs "The"
// console.log(sentence.substring(40, 43)); // Outputs "dog"
// console.log(sentence.substring(20)); // Outputs "jumps over the lazy dog."