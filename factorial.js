const readline = require("readline");

const rl = readline.crerateInterface({
    input:process.stdin,
    output:process.stdout,
})

console.log("Factorial Application");

console.log("1. Say Hello");
console.log("2. Compute Factorial");
console.log("3. Exit");

  rl.question("Enter your choices (1-3)", choice => {
     if(choice === "1" ){
        console.log("Hello There!");
        backToMenu();
     } else if(choice === "2"){
        computeFactorial();
        console.log("Factorial");

     } else if(choice === "3"){
       console.log("Exiting program .... GoodBye!");
       rl.close();

     }

 } )

    


