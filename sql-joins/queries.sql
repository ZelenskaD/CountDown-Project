-- write your queries here
SELECT * FROM owners FULL JOIN  vehicles ON owners.id = owner_id;

SELECT first_name, last_name, COUNT(*) AS count  FROM owners JOIN vehicles ON owners.id = owner_id GROUP BY owners.id ORDER BY count asc;
SELECT first_name, last_name, CAST(AVG(price)AS INT) AS average_price, COUNT(*) AS count FROM owners JOIN vehicles ON owners.id = owner_id GROUP BY owners.id  HAVING CAST(AVG(price)AS INT) > 10000 AND  COUNT(*)>=2 ORDER BY count  DESC;
