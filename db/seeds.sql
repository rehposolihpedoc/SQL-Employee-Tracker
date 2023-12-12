USE employeetracking_db;

INSERT INTO department (name)
VALUES ("C-LEVEL"),
       ("RESEARCH"),
       ("TECHNOLOGY"),
       ("SALES"),
       ("MARKETING");


INSERT INTO role (title, salary, bonus, department_id)
VALUES ("CEO", 750000, 100000,  1),
       ("CFO", 450000, 50000, 1),
       ("CTO", 450000, 50000, 1),

       ("Research Lead", 250000, 30000, 2 ),
       ("R&D Manager", 200000, 20000, 2),
       ("Research Scientist", 150000, 10000, 2),
       
       ("VP of Engineering", 250000, 30000, 3),
       ("Lead Engineer", 200000, 20000, 3),
       ("Engineer Supervisor", 175000, 10000, 3),

       ("VP of Sales", 350000, 150000, 4),
       ("Sales Lead", 250000, 75000, 4),
       ("Sale Engineer", 175000, 50000 4),

       ("VP of Marketing", 300000, 100000, 5),
       ("Marketing Lead", 200000, 50000, 5),
       ("Marketing manager", 100000, 25000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Big", "Olhead", 1, 232),
       ("Crabby", "Patty", 2, 200),
       ("Jimmy", "Jammy", 3, 101),
       ("Jack", "Fruit", 4, 205),
       ("Larry", "Lumpus", 5, 234),
       ("Gloria", "Estephanicus", 6, 201),
       ("June", "Jollyman", 7, 239),
       ("Tyrone", "Jenkins", 8, 103 ),
       ("Wednesday", "Adams", 9, 304),
       ("Jolly", "Santa-na", 10, 403),
       ("James", "Bluntsallot", 11, 550),
       ("Julius", "Pepperman", 12, 489),
       ("Yemo", "Omo", 13, 222),
       ("Wise", "Wilson", 14, 221 ),
       ("Wonder", "Stevenson", 15, 465);