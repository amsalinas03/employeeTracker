const inquirer = require("inquirer");
import { addEmployee, addRole, addDepartment, viewDepartments, viewRoles, viewAllEmployees, updateEmployeeRole } from "./db";

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
                    return viewEmployeesChoice();
                case "viewRoles":
                    return viewRolesChoice();
                case "viewDepartments":
                    return viewDepartmentsChoice();
                case "addNewEmployee":
                    return addEmployeeChoice();
                case "addNewRole":
                    return addRoleChoice();
                case "addNewDepartment":
                    return addDepartmentChoice();
                case "updateEmployeeRole":
                    return updateEmployeeRoleChoice();
                case "exit":
                    return exit();
            }
        }
        )
    )
}

function viewEmployeesChoice() {
    dbFunctions.viewAllEmployees((res) => (
        res.forEach(({ id, first_name, last_name, title, department, salary, manager}) => {
            console.log(`Name: ${first_name} ${last_name}, ID: ${id}, Title: ${title}, Department: ${department}, Salary: ${salary}, Manager: ${manager}`);
        })
    )).then(
        mainMenu()
    )
}