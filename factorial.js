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
     
     function backToMenu(){
        console.log("........");
        console.log("1. Back To Menu");
        console.log("2. Exit");

        rl.question("What would you like to do next? (1-2)", (backToMenuChoice) =>{
           if(backToMenuChoice === "1"){
            console.log();
            mainMenu();
           } else if(backToMenuChoice ==="2"){
             console.log("Exiting program... Goodbye");
             rl.close();
           } else {
             console.log("Invalid choice. Please try Again");
             backToMenu();
           }

        })
     }
         

mainMenu();      

    


