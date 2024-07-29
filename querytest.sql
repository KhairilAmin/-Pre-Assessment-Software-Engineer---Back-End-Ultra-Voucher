-- Membuat Tabel
CREATE TABLE people (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    parent_id INT
);

-- Insert data
INSERT INTO people (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);

--SOLUSI 1
-- Menggunakan Left Join
SELECT 
    p1.id,
    p1.name,
    p2.name AS parent_name
FROM 
    people p1
LEFT JOIN 
    people p2 ON p1.parent_id = p2.id;

-- SOLUSI 2
-- Menggunakan subquery
SELECT 
    p1.id,
    p1.name,
    (SELECT p2.name FROM people p2 WHERE p2.id = p1.parent_id) AS parent_name
FROM 
    people p1;