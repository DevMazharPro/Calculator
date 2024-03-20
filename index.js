#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select an operator for operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statements
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Select A Valid Operator");
}
