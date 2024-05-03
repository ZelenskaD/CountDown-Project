-- Drop the existing database if it exists
DROP DATABASE IF EXISTS soccelg_db;

-- Create a new database
CREATE DATABASE soccelg_db;

-- Connect to the newly created database
\c soccelg_db;

-- Create a table for teams
CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    team_name TEXT NOT NULL,
    qty_of_players INTEGER NOT NULL,
    player_fn TEXT NOT NULL  -- This seems to be incorrect; should be moved to a players table
);

-- Create a table for games
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    stadium TEXT NOT NULL,
    city TEXT NOT NULL,
    match_date TIMESTAMP,  -- Changed from TIME to TIMESTAMP for actual date and time
    team1 INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    team2 INTEGER REFERENCES teams(id) ON DELETE CASCADE
);

-- Create a table for goals
CREATE TABLE goals (
    matchid INTEGER NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    player_fn TEXT,  -- Assuming player_fn is meant to be a player's name, should be normalized
    g_time INTEGER
);

-- Create a table for referees
CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    referee_name TEXT NOT NULL
);

-- Create a table for match referees (linking referees to games)
CREATE TABLE match_referees (
    game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
    referee_id INTEGER REFERENCES referees(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, referee_id)
);

-- Create a table for players (should be a separate table, not in teams)
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    player_name TEXT NOT NULL
);

-- Create a table for rankings (if necessary)
CREATE TABLE rankings (
    team_id INTEGER REFERENCES teams(id),
    match_id INTEGER REFERENCES games(id),
    rank INTEGER,
    PRIMARY KEY (team_id, match_id)
);


--Teams
---
--id PK
--team_name
--qty_of_players

--Games
---
--id PK
--stadium
--city
--match_date
--team1 FK - Teams
--team2 FK - Teams
--
--Goals
---
--id PK
--matchid FK - Games
--team_id FK - Teams
--g_time
--
--Referees
---
--id PK
--referee_name
--
--Match_Referees
---
--game_id FK - Games
--referee_id FK - Referees
--game_id, referee_id PK
--
--Players
---
--id PK
--team_id FK - Teams
--player_name
--
--Rankings
---
--team_id FK - Teams
--match_id FK - Games
--rank
--team_id, match_id PK
