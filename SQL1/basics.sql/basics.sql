Ex0

SELECT population FROM world
  WHERE name = 'Germany';

SELECT name, population FROM world
  WHERE name IN ('Sweden','Norway','Denmark');


SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000;




Ex1
SELECT name FROM world
  WHERE name LIKE 'Y%';

  SELECT name FROM world
  WHERE name LIKE '%Y';

 SELECT name FROM world
  WHERE name LIKE '%x%';

 SELECT name FROM world
  WHERE name LIKE '%land';

 SELECT name FROM world
  WHERE name LIKE 'C%ia';

SELECT name FROM world
  WHERE name LIKE '%oo%';

SELECT name FROM world
  WHERE name LIKE '%a%a%a%';

SELECT name FROM world
 WHERE name LIKE '_t%'
ORDER BY name

SELECT name FROM world
 WHERE name LIKE '%o__o%'

 SELECT name FROM world
 WHERE LENGTH(name) = 4;

SELECT name
  FROM world
 WHERE name = capital

SELECT name
  FROM world
 WHERE capital LIKE CONCAT( name, ' City');

 SELECT capital, name
FROM world
WHERE capital LIKE CONCAT('%', name, '%');

SELECT capital, name
FROM world
WHERE capital LIKE CONCAT(name, '%')
  AND capital != name;

  SELECT name,
       TRIM(REPLACE(capital, name, '')) AS replaced
FROM world
WHERE capital LIKE CONCAT(name, '%')
  AND capital != name
  AND TRIM(REPLACE(capital, name, '')) != '';


Ex 2
SELECT name, continent, population FROM world;

SELECT name FROM world
WHERE population >= 200000000;

SELECT name, gdp/ population
FROM world
Where population >= 200000000;

SELECT name, population / 1000000 AS population_in_millions
FROM world
WHERE continent = 'South America';

SELECT name, population
FROM world
WHERE name IN ('France','Germany','Italy');

SELECT name
FROM world
WHERE name LIKE 'United%';

SELECT name, population, area
FROM world
WHERE area>=3000000 OR population>=250000000;

SELECT name, population, area
FROM world
WHERE area>3000000 XOR population>250000000;

SELECT name,
       ROUND(population / 1000000.0, 2) AS population_in_millions,
       ROUND(gdp / 1000000000.0, 2) AS gdp_in_billions
FROM world
WHERE continent = 'South America';


SELECT name,
       ROUND((gdp / population) / 1000) * 1000 AS per_capita_gdp
FROM world
WHERE gdp >= 1000000000000;


SELECT name,capital
  FROM world
WHERE LENGTH(name) = LENGTH(capital);


SELECT name, capital
FROM world
WHERE LEFT(name, 1) = LEFT(capital, 1)
  AND name <> capital;

  SELECT name
FROM world
WHERE name LIKE '%a%'
  AND name LIKE '%e%'
  AND name LIKE '%i%'
  AND name LIKE '%o%'
  AND name LIKE '%u%'
  AND name NOT LIKE '% %';



EX 3

SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950

SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'literature'

SELECT yr, subject
  FROM nobel
 WHERE winner = 'Albert Einstein';


SELECT winner
  FROM nobel
 WHERE  subject = 'peace' AND yr >= 2000;


SELECT yr, subject, winner
  FROM nobel
 WHERE  subject = 'literature' AND yr between 1980 and 1989;

SELECT * FROM nobel
 WHERE winner IN('Theodore Roosevelt','Thomas Woodrow Wilson','Jimmy Carter', 'Barack Obama')

 SELECT winner
FROM nobel
 WHERE winner LIKE ('John%')

 SELECT yr, subject, winner
FROM nobel
 WHERE subject = 'physics' AND yr = 1980  OR subject = 'chemistry' AND yr = 1984

 SELECT yr, subject, winner
FROM nobel
 WHERE yr = 1980 AND
subject != 'chemistry' AND subject !='medicine'

SELECT yr, subject, winner
FROM nobel
WHERE (subject = 'Medicine' AND yr < 1910)
   OR (subject = 'Literature' AND yr >= 2004);

SELECT yr, subject, winner
FROM nobel
WHERE winner IN ('PETER GRÜNBERG')

SELECT winner,yr,subject
FROM nobel
WHERE winner LIKE 'Sir%'
 ORDER BY yr DESC, winner;



SELECT winner, subject
FROM nobel
WHERE yr = 1984
ORDER BY
  CASE
    WHEN subject IN ('Physics', 'Chemistry')
    THEN 1
    ELSE 0
  END,
  subject, winner;


-----

SELECT age, COUNT(*) AS people_count
FROM people
GROUP BY age;

SELECT age, COUNT(*) AS total_people
FROM people
GROUP BY age
HAVING COUNT(*)>=10;

EX 5

SELECT SUM(population)
FROM world;


SELECT DISTINCT continent
FROM world;

SELECT SUM(gdp)AS total_gdp
from world
where continent ='Africa';

SELECT COUNT(*)
from world
where area >= 1000000;

SELECT SUM(population)
from world
where name IN ('Estonia', 'Latvia', 'Lithuania');

SELECT continent, COUNT(*) AS country_count
FROM world
GROUP BY continent;

SELECT continent, COUNT(*) AS country_count
FROM world
where population >= 10000000
GROUP BY continent;

SELECT continent
FROM world
GROUP BY continent
HAVING SUM(population) >= 100000000;


