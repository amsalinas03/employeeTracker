const inquirer = require("inquirer");
import * as dbFunctions from "./db/index"

function mainMenu() {
    console.log("Welcome to the Employee Tracker System")
    inquirer.prompt(
        {
        type: "list",
        name: "mainMenuChoices",
        message: "Please choose from the following options",
        choices: [
            {
                name: "View Employees",
                value: "viewEmployees"
            },
            {
                name: "View Employees by Department",
                value: "viewEmployeesByDepartment"
            },
            {
                name: "View Employees By Manager",
                value: "viewEmployeesByManager"
            },
            {
                name: "More",
                value: "moreMainMenu"
            }
        ]
        }.then((choice) => {
            switch(choice) {
                case "viewEmployees":
                    return viewEmployees();
                case "viewEmployeesByDepartment":
                    return viewEmployeesByDepartment();
                case "viewEmployeesByManager":
                    return viewEmployeesByManager();
                case "More":
                    return moreMainMenu();
            }
        }
        )
    )
}

function viewEmployees ()