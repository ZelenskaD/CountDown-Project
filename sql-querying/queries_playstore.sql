-- Comments in SQL Start with dash-dash --
SELECT app_name  FROM analytics WHERE id = 1880; -- Web Browser for Android
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01'; -- 275 rows
SELECT category, COUNT(*) AS app_count FROM analytics GROUP BY category; --33 rows
SELECT app_name, COUNT(*) AS review_count FROM analytics GROUP BY app_name ORDER BY review_count DESC LIMIT 5; -- retteMi.ch                    |            1
-- Cardboard                     |            1
-- Fashion Girls Dress up Makeup |            1
-- Gods by Night                 |            1
-- E-NUM                         |            1
SELECT app_name, COUNT(*) AS review_count FROM analytics WHERE rating >= 4.8 GROUP BY app_name ORDER BY review_count DESC LIMIT 1; -- Pacific Navy Fighter C.E. (AS) |            1
SELECT category, AVG(rating) AS average_rating FROM analytics GROUP BY category ORDER BY average_rating DESC; -- 33 rows
SELECT app_name, price, rating FROM analytics   WHERE rating < 3 ORDER BY price DESC LIMIT 1; --Naruto & Boruto FR | 379.99 |    2.9
SELECT * FROM analytics WHERE min_install <= 50 AND rating IS NOT NULL ORDER BY rating DESC;--57 rows
SELECT app_name FROM analytics WHERE rating < 3 AND reviews >= 10000; -- The Wall Street Journal: Business & Market News
-- Vikings: an Archer’s Journey
-- Shoot Em Down Free
--(3 rows)
SELECT app_name FROM analytics WHERE price between 0.10 and 1.00 ORDER BY reviews DESC LIMIT 10;
--Free Slideshow Maker & Video Editor
-- Couple - Relationship App
-- Anime X Wallpaper
-- Dance On Mobile
-- Marvel Unlimited
-- FastMeet: Chat, Dating, Love
-- IHG®: Hotel Deals & Rewards
-- Live Weather & Daily Local Weather Forecast
-- DreamMapper
-- Můj T-Mobile Business
--(10 rows)

SELECT app_name, last_updated FROM analytics ORDER BY last_updated DESC LIMIT 1;
-- app_name  | last_updated
--------------+--------------
-- True Skate | 2018-08-08
--(1 row)
SELECT app_name, price FROM analytics ORDER BY price DESC LIMIT 1;
--      app_name      | price
--------------------+-------
-- Cardi B Piano Game |   400
--(1 row)
SELECT COUNT(reviews) AS total_reviews FROM analytics;
-- total_reviews
-----------------
--          9637
--(1 row)
SELECT category, COUNT(app_name) AS apps FROM analytics GROUP BY category HAVING COUNT(app_name) > 300;
--    category     | apps
-------------------+------
-- COMMUNICATION   |  342
-- PHOTOGRAPHY     |  313
-- GAME            | 1110
-- BUSINESS        |  313
-- MEDICAL         |  350
-- TOOLS           |  753
-- LIFESTYLE       |  319
-- PRODUCTIVITY    |  360
-- PERSONALIZATION |  329
-- FINANCE         |  331
-- SPORTS          |  338
-- FAMILY          | 1789
--(12 rows)

SELECT app_name, reviews, min_installs,  min_installs / CAST(reviews AS FLOAT) AS proportion FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC LIMIT 1;

--     app_name     | reviews | min_installs |     proportion
--------------------+---------+--------------+--------------------
-- Kim Bu Youtuber? |      66 |     10000000 | 151515.15151515152
--(1 row)
