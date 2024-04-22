#! /usr/bin/env node
import inquirer from "inquirer"
console.log(`\t "Welcome to BMI Calculator"`)
    let bmi = await inquirer.prompt([{
        name: "weight",
        type: "number",
        message: "Weight(kg): "
    },
    {
        name: "height",
        type: "number",
        message: "height(m): "
    }
])
console.log(`BMI :${bmi.weight /(bmi.height * bmi.height)}`);
