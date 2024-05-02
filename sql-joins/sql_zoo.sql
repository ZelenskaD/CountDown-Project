EX.6

SELECT matchid, player FROM goal
  WHERE teamid = 'GER'

SELECT id,stadium,team1,team2
  FROM game
JOIN goal
ON goal.matchid = game.id WHERE game.id = 1012 LIMIT 1;


SELECT player,teamid,stadium, mdate
  FROM game JOIN goal ON (id=matchid) WHERE teamid = 'GER';

  SELECT team1, team2, player
  FROM game JOIN goal ON (id=matchid) WHERE player LIKE 'Mario%';

  SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam on teamid=id
 WHERE gtime<=10

 SELECT mdate,teamname
  FROM game JOIN eteam on (team1=eteam.id)
 WHERE coach = 'Fernando Santos' ;

 SELECT player
   FROM game JOIN goal ON game.id = matchid
 WHERE stadium = 'National Stadium, Warsaw';

 SELECT DISTINCT player
FROM game
 JOIN goal ON game.id = goal.matchid
        WHERE (game.team1 = 'GER' OR game.team2 = 'GER') AND goal.teamid != 'GER';

SELECT eteam.teamname, COUNT(*) AS count
  FROM eteam JOIN goal ON eteam.id=goal.teamid
GROUP BY eteam.teamname
 ORDER BY teamname;

 SELECT game.stadium, COUNT(id) AS number_of_goals
FROM game JOIN goal ON game.id = goal.matchid
GROUP BY game.stadium
ORDER BY game.stadium;

SELECT
    matchid,
   mdate,
    COUNT(id) AS goals
FROM
    game
JOIN
    goal ON game.id = goal.matchid
WHERE
    (game.team1 = 'POL' OR game.team2 = 'POL')
GROUP BY
    game.id, game.mdate
ORDER BY
    game.id;



    SELECT matchid, mdate, COUNT(id) AS goals
FROM game
JOIN goal ON game.id = goal.matchid
WHERE (game.team1 = 'GER' OR game.team2 = 'GER') AND goal.teamid = 'GER'
GROUP BY game.id, game.mdate
ORDER BY game.id;


SELECT  game.mdate, game.team1,
SUM(CASE WHEN goal.teamid = game.team1 THEN 1 ELSE 0 END) AS score1, game.team2,
SUM(CASE WHEN goal.teamid = game.team2 THEN 1 ELSE 0 END) AS score2
FROM  game
JOIN goal ON game.id = goal.matchid
GROUP BY game.mdate, game.id, game.team1, game.team2
ORDER BY  game.mdate, game.id, game.team1, game.team2;



EX. 7
SELECT id, title
 FROM movie
 WHERE yr=1962

 SELECT yr
FROM movie
WHERE title = 'Citizen Kane';


SELECT id, title, yr
FROM movie
WHERE title LIKE 'Star Trek%'
ORDER BY yr;

SELECT id
FROM actor
WHERE name = 'Glenn Close';

SELECT id
FROM movie
WHERE title = 'Casablanca';

SELECT actor.name
FROM actor
JOIN casting ON actor.id = casting.actorid
WHERE casting.movieid = 11768

SELECT actor.name
FROM actor
JOIN casting ON actor.id = casting.actorid
JOIN movie ON movie.id = casting.movieid
WHERE movie.title= 'Alien'

SELECT movie.title
FROM movie
JOIN casting ON movie.id = casting.movieid
JOIN actor ON actor.id = casting.actorid
WHERE actor.name = 'Harrison Ford'

SELECT movie.title
FROM movie
JOIN casting ON movie.id = casting.movieid
JOIN actor ON actor.id = casting.actorid
WHERE actor.name = 'Harrison Ford' AND casting.ord != 1;
