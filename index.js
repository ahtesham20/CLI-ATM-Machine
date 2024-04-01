#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 1000000;
let myPin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin:"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Logged In Successfully.");
    let operations = await inquirer.prompt([
        {
            name: "operators",
            type: "list",
            message: "Select an operator:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operations.operators === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethods",
                type: "list",
                message: "Select a withdraw method:",
                choices: ["Fast Cash", "Enter Amount"],
            }
        ]);
        if (withdrawAns.WithdrawMethods === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "Select amount to withdraw:",
                    choices: ["1000", "2000", "5000", "10000", "20000", "50000", "100000"]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("Insufficient Balance.");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash} Withdrawn Successfully.`);
                console.log(`Remaining Balance is ${myBalance}`);
            }
        }
        else {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to withdraw:",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance.");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdrawn Successfully.`);
                console.log(`Remaining Balance is ${myBalance}`);
            }
        }
    }
    else {
        console.log(`Your Current Balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid Code! Try again.");
}
