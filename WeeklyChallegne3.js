const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
   var items = items[Math.floor(Math.random() * items.length)];

    let d6 = [1, 2, 3, 4, 5, 6]


    while(true) {
        console.log("Which dice do you want to roll?");
        console.log("[1] Six");
        console.log("[2] Ten");
        console.log("[3] Twenty");
        console.log("[4] One Hundred");
        console.log("[5] Exit")
        let ans = await askQuestion("Enter a number to select an option from the list above");
        
        
        if(ans == "1") {
    for (let i = 0; i < array.length; i++) {
        
        
    }
        }
 else{
        
            console.log("yeah mate");
        }

     




}
}
Program().then(() => {
    process.exit(0);
});