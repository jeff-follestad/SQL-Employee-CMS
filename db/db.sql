DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

const promptMessages = {
    viewAllEmployees: "List All Employees",
    viewByDepartment: "List All Employees By Department",
    viewByManager: "List All Employees By Manager",
    addEmployee: "Add An Employee",
    removeEmployee: "Remove An Employee",
    updateRole: "Update Employee Role",
    updateEmployeeManager: "Update Employee Manager",
    viewAllRoles: "List All Roles",
    exit: "Exit"
};