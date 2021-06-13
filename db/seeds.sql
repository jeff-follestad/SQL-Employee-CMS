USE employee_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Operations");
INSERT INTO department (name) VALUES ("Information Technology");
INSERT INTO department (name) VALUES ("Finance");

INSERT INTO role (title, salary, department_id) VALUES ("Associate", 50, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 70, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Senior Manager", 90, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 120, 4);
INSERT INTO role (title, salary, department_id) VALUES ("VP", 200, 5);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Aidan", "Brown", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Callie", "Davis", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Emmy", "Frank", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Gillian", "Harris", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Isabel", "Johnson", 5);