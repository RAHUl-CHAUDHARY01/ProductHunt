-- Command to use this file: mysql -u root -p producthunt < ./commands.sql

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    github VARCHAR(255),
    experience DECIMAL(3,1),
    college VARCHAR(255) NOT NULL,
    graduation_year YEAR NOT NULL,
    location VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
