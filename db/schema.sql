DROP DATABASE IF EXISTS employeetracking_db;
CREATE DATABASE employeetracking_db;

USE employeetracking_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    bonus DECIMAL NULL,
    department_id INT NOT NULL
-- fk to deparmtnet_id
);


CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
    --fk to role id
    --fk to employee id
);