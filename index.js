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
                name: "View All Employees",
                value: "viewEmployees"
            },
            {
                name: "View Roles",
                value: "viewRoles"
            },
            {
                name: "View Departments",
                value: "viewDepartments"
            },
            {
                name: "Add an Employee",
                value: "addNewEmployee"
            },
            {
                name: "Add a Role",
                value: "addNewRole"
            },
            {
                name: "Add a Deparmtnet",
                value: "addNewDepartment"
            },
            {
                name: "Update an Existing Employee's Role",
                value: "updateEmployeeRole"
            },
            {
                name: "Exit application",
                value: "exit"
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