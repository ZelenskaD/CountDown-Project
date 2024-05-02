-- Comments in SQL Start with dash-dash --
INSERT INTO products (name, price, can_be_returned) values ('chair', 44.00, false); --Add a product to the table
INSERT INTO products (name, price, can_be_returned) values ('stool', 25.99, true); --Add a product to the table
INSERT INTO products (name, price, can_be_returned) values ('table', 124.00, false); --Add a product to the table

SELECT*FROM products; --Display all of the rows and columns in the table.
SELECT name FROM products; --Display all of the names of the products.
SELECT name, price FROM products; --Display all of the names and prices of the products.

INSERT INTO products (name, price, can_be_returned) values ('bed', 500.99, true); --Add a new product - make up whatever you would like!
SELECT name FROM products WHERE can_be_returned = true; --Display only the products that can_be_returned (stool bed)
SELECT name FROM products WHERE price < 44.00;   -- Display only the products that have a price less than 44.00. (stool)
SELECT name FROM products WHERE price between 22.50 and 99.99;--Display only the products that have a price in between 22.50 and 99.99.(chair, stool)
UPDATE products SET price = price - 20;--There’s a sale going on: Everything is $20 off! Update the database accordingly.
DELETE FROM products WHERE price<25;--Because of the sale, everything that costs less than $25 has sold out. Remove all products whose price meets this criteria.
UPDATE products SET price = price + 20;--And now the sale is over. For the remaining products, increase their price by $20.
UPDATE products SET can_be_returned = true; --There is a new company policy: everything is returnable. Update the database accordingly.

