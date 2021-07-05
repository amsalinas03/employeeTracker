const connection = require ("../db/connection");

function addEmployee() {
    return connection.query(
        "INSERT INTO employee SET ?"
    )
};

function addRole() {
    return connection.query(
        "INSERT INTO role SET ?"
    )
}

function addDepartment() {
    return connection.query(
        "INSERT INTO department SET ?"
    )
}

function viewDepartments() {
    return connection.query(
        "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id GROUP BY department.id, department.name"
    )
}
function viewRoles() {
    return connection.query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id"
    )
}
function viewAllEmployees() {
    return connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
}

function updateEmployeeRole(employeeID, roleID) {
    return connection.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    )
}

module.exports = {
    addEmployee: addEmployee,
    addRole: addRole,
    addDepartment: addDepartment,
    viewDepartments: viewDepartments,
    viewRoles: viewRoles,
    viewAllEmployees: viewAllEmployees,
    updateEmployeeRole: updateEmployeeRole
}