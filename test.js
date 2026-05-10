CREATE DATABASE onlineshopping1;
USE onlineshopping1;


-- Create Cart Table
CREATE TABLE cart (
    c_status VARCHAR(90),
    total_price INT,
    cart_id INT,
    created_date DATE
);

-- Insert Data
INSERT INTO cart VALUES
('active', 5000, 1, '2026-04-23'),
('ordered', 12000, 2, '2026-04-22'),
('pending', 3000, 3, '2026-04-21'),
('cancelled', 0, 4, '2026-04-20');

ALTER TABLE product ADD model VARCHAR(50);

ALTER TABLE product MODIFY name VARCHAR(60);

ALTER TABLE product RENAME COLUMN model TO model_no;

ALTER TABLE product DROP COLUMN brand;

UPDATE product SET price = 1600 WHERE id = 1;

DELETE FROM product WHERE price = 2000;

TRUNCATE TABLE product;

2.Primary and foreign key

SHOW DATABASES;

USE online_shopping;

CREATE TABLE user (
    u_id INT PRIMARY KEY,
    name VARCHAR(50),
    u_email VARCHAR(20),
    phone_no INT
);

CREATE TABLE payment (
    payment_id INT PRIMARY KEY,
    amount DECIMAL(10,2),
    payment_method VARCHAR(90)
);

CREATE TABLE delivery (
    delivery_id INT PRIMARY KEY,
    delivery_date DATE,
    delivery_time VARCHAR(30),
    status VARCHAR(20)
);

ALTER TABLE payment 
ADD u_id INT,
ADD FOREIGN KEY (u_id) REFERENCES user(u_id);

ALTER TABLE delivery 
ADD payment_id INT,
ADD FOREIGN KEY (payment_id) REFERENCES payment(payment_id);

3. Operations


-- Relational Operators
SELECT * FROM cart WHERE cart_id > 2;
SELECT * FROM cart WHERE cart_id < 4;

-- Pattern Matching
SELECT * FROM cart WHERE c_status LIKE 'o%';
SELECT * FROM cart WHERE c_status LIKE '%p%';

-- Aggregate Function
SELECT MAX(cart_id) FROM cart;

SELECT c_status, SUM(cart_id) AS total_cart_id
FROM cart
GROUP BY c_status;

-- Sorting
SELECT * FROM cart ORDER BY cart_id DESC;
SELECT * FROM cart ORDER BY cart_id ASC;


-- View
CREATE VIEW cartview AS
SELECT * FROM cart;

CREATE VIEW cart_summary_view AS
SELECT c_status, SUM(total_price) AS total_amount
FROM cart
GROUP BY c_status;

-- Nested Query
SELECT c_status
FROM cart
WHERE cart_id > (SELECT AVG(cart_id) FROM cart);

SELECT c_status
FROM cart
WHERE cart_id = (SELECT MAX(cart_id) FROM cart);

-- Set Operators
SELECT c_status FROM cart WHERE cart_id < 10
UNION ALL
SELECT c_status FROM cart WHERE cart_id > 2;

SELECT c_status FROM cart WHERE cart_id < 2
UNION
SELECT c_status FROM cart WHERE cart_id > 10;

CREATE INDEX idx_status ON cart(c_status);

CREATE UNIQUE INDEX idx_cart_id ON cart(cart_id);

SHOW INDEX FROM cart;

4. stored procedure

-- Procedure 1
DELIMITER //

CREATE PROCEDURE p1()
BEGIN
    SELECT * FROM user;
END //

DELIMITER ;

CALL p1();

-- Procedure 2
DELIMITER //

CREATE PROCEDURE p2()
BEGIN
    SELECT * FROM cart;
END //

DELIMITER ;

CALL p2();

5.TRIGGER

-- BEFORE INSERT Trigger
DELIMITER //

CREATE TRIGGER t1
BEFORE INSERT ON cart
FOR EACH ROW
BEGIN
    SET NEW.c_status = 'delete';
    SET NEW.cart_id = 6;
END //

DELIMITER ;

-- Test Trigger
INSERT INTO cart(total_price)
VALUES (2000);

SELECT * FROM cart;
