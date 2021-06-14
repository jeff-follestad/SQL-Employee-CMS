DROP DATABASE IF EXISTS employeetrackerDB;
CREATE DATABASE employeetrackerDB;
USE employeetrackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);
-- EMPLOYEE ROLE TABLE --
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)

);
-- DEPARTMENT --
INSERT INTO department (name) VALUE ("Sales");

INSERT INTO department (name) VALUE ("Operations");

INSERT INTO department (name) VALUE ("Finance");

INSERT INTO department (name) VALUE ("Legal");

-- ROLES --
INSERT INTO role (title, salary, department_id) VALUE ("Lead Engineer", 150000, 2);

INSERT INTO role (title, salary, department_id) VALUE ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id) VALUE ("Accountant", 125000, 3);

INSERT INTO role (title, salary, department_id) VALUE ("Sales Director", 100000, 1);

INSERT INTO role (title, salary, department_id) VALUE ("Account Executive", 80000, 1);

INSERT INTO role (title, salary, department_id) VALUE ("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id) VALUE ("Lawyer", 190000, 4);

-- EMPLOYEE --
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Aidan", "Booth", null, 1);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Cale", "Davis", null, 2);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Erin","Frank",null,3);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Guy", "Hall", 1, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Ingrid", "Janssen", 4, 5);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Kai", "Lewis", 1, 6);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Mike", "Nguyen", 2, 7);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

--the end--