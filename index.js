const inquirer = require("inquirer");
const { addEmployee, addRole, addDepartment, viewDepartments, viewRoles, viewAllEmployees, updateEmployeeRole } = require("./db/index")

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
                name: "Add a Department",
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
        }).then((choice) => {
            switch(choice) {
                case "viewEmployees":
                    return viewEmployeesChoice();
                    break;
                case "viewRoles":
                    return viewRolesChoice();
                    break;
                case "viewDepartments":
                    return viewDepartmentsChoice();
                    break;
                case "addNewEmployee":
                    return addEmployeeChoice();
                    break;
                case "addNewRole":
                    return addRoleChoice();
                    break;
                case "addNewDepartment":
                    return addDepartmentChoice();
                    break;
                case "updateEmployeeRole":
                    return updateEmployeeRoleChoice();
                    break;
                case "exit":
                    return exit();
                    break;
            }
        }
        )
}

function viewEmployeesChoice() {
    viewAllEmployees((res) => (
        res.forEach(({ id, first_name, last_name, title, department, salary, manager}) => {
            console.log(`Name: ${first_name} ${last_name}, ID: ${id}, Title: ${title}, Department: ${department}, Salary: ${salary}, Manager: ${manager}`);
        })
    )).then(
        mainMenu()
 )
   viewAllEmployees()
}

function viewRolesChoice() {
    viewRoles((res) => (
        res.forEach(({ title, salary, department }) => {
            console.log(`${title}, Salary: $${salary}, Department: ${department}`)
        })
    ))
}

function viewDepartmentsChoice() {
    viewDepartments((res) => (
        res.forEach(({name}) => {
            console.log(`${name}`)
        })
    ))
}
function addDepartmentChoice() {
    department = inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the new department?"
        }
    ]);
    addDepartment(department);
    console.log(`${department.name} added to list!`);
    mainMenu;
}

function addEmployeeChoice() {
    let employees = viewAllEmployees();
    const managerChoices = employees.map(({first_name, last_name}) => console.log(`${first_name} ${last_name}`)
    )
    inquirer.prompt(
        {
            type: "input",
            name: "newEmployeeFirstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "newEmployeeLastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "newEmployeeId",
            message: "What is the employee's ID?"
        },
        {
            type: "list",
            name: "newEmployeeManager",
            message: "Who is this employee's manager?",
            choices: managerChoices
        }
    )
}
mainMenu();