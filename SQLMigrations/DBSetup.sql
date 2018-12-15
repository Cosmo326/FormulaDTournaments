/*
DROP DATABASE FormulaD
DROP LOGIN RaceAdmin
*/

CREATE DATABASE FormulaD
GO

USE FormulaD
GO

CREATE SCHEMA race
GO

DECLARE @RC int
DECLARE @loginame sysname = 'RaceAdmin'
DECLARE @passwd sysname = 'wQl$s2s4D0ki'
DECLARE @defdb sysname
DECLARE @deflanguage sysname
DECLARE @sid varbinary(16)
DECLARE @encryptopt varchar(20)

EXECUTE @RC = [sys].[sp_addlogin] 
   @loginame
  ,@passwd
  ,@defdb
  ,@deflanguage
  ,@sid
  ,@encryptopt
GO

DECLARE @RC int
DECLARE @loginame sysname = 'RaceAdmin'
DECLARE @name_in_db sysname = 'RaceAdmin'
DECLARE @grpname sysname = 'db_owner'

EXECUTE @RC = [sys].[sp_adduser] 
   @loginame
  ,@name_in_db
  ,@grpname
GO

CREATE TABLE race.Racer (
    Id                 UNIQUEIDENTIFIER NOT NULL,
    Name               NVARCHAR (256)   NULL,
    Avatar             IMAGE            NULL,
    CONSTRAINT [PK_Racer_Id] PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT [UC_Racer_Name] UNIQUE (Name)
)
GO

CREATE TABLE race.Tournament
(
    Id UNIQUEIDENTIFIER NOT NULL,
    Name VARCHAR(255) NOT NULL,
    StartDate DATETIME2(7) NOT NULL,
    CompleteDate DATETIME2(7) NULL,
    RaceCount INT NOT NULL,
    CONSTRAINT PK_Tournament_Id PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT UC_Tournament_Name UNIQUE (Name)
)
GO

CREATE TABLE race.Race
(
    Id UNIQUEIDENTIFIER NOT NULL,
    TournamentId UNIQUEIDENTIFIER NOT Null,
    Track VARCHAR(255) NOT NULL,
    RaceDate DATETIME2(7) NOT NULL,
    EndDate DATETIME2(7) NULL,
    Laps INT NOT NULL,
    CONSTRAINT PK_Race_Id PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT FK_Race_Tournament_TournamentId_Id FOREIGN KEY (TournamentId) REFERENCES race.Tournament (Id)
)
GO

CREATE TABLE race.Turn
(
    Id UNIQUEIDENTIFIER NOT NULL,
    TurnNumber INT NOT NULL,
    RacerId UNIQUEIDENTIFIER NOT NULL,
    RaceId UNIQUEIDENTIFIER NOT NULL,
    Lap INT NOT NULL,
    Speed INT NOT NULL,
    Gear INT NOT NULL,
    StartPosition INT NOT NULL,
    EndPosition INT NOT NULL,
    Tire INT NOT NULL DEFAULT 6,
    Brakes INT NOT NULL DEFAULT 3,
    Transmission INT NOT NULL DEFAULT 3,
    Body INT NOT NULL DEFAULT 3,
    Engine INT NOT NULL DEFAULT 3,
    Handling INT NOT NULL DEFAULT 2,
    CONSTRAINT PK_Turn_Id PRIMARY KEY CLUSTERED (Id),
    CONSTRAINT FK_Turn_Racer_RacerId_Id FOREIGN KEY (RacerId) REFERENCES race.Racer (Id),
    CONSTRAINT FK_Turn_Race_RaceId_Id FOREIGN KEY (RaceId) REFERENCES race.Race (Id)
)
GO

CREATE TABLE race.RaceStandings
(
    RaceId UNIQUEIDENTIFIER NOT NULL,
    RacerId UNIQUEIDENTIFIER NOT NULL,
    Standing INT NOT NULL DEFAULT 0,
    Points INT NOT NULL DEFAULT 0,
    Tire INT NOT NULL DEFAULT 6,
    Brakes INT NOT NULL DEFAULT 3,
    Transmission INT NOT NULL DEFAULT 3,
    Body INT NOT NULL DEFAULT 3,
    Engine INT NOT NULL DEFAULT 3,
    Handling INT NOT NULL DEFAULT 2,
    CONSTRAINT PK_RaceStandings_RaceId_RacerId PRIMARY KEY (RaceId, RacerId),
    CONSTRAINT FK_RaceStandings_Race_RaceId_ID FOREIGN KEY (RaceId) REFERENCES race.Race (Id),
    CONSTRAINT FK_RaceStandings_Racer_RacerId_ID FOREIGN KEY (RacerId) REFERENCES race.Racer (Id)
)
GO

CREATE TABLE race.TournamentStandings
(
    TournamentId UNIQUEIDENTIFIER NOT NULL,
    RacerId UNIQUEIDENTIFIER NOT NULL,
    Standing INT NOT NULL DEFAULT 0,
    Points INT NOT NULL DEFAULT 0,
    CONSTRAINT PK_TournamentStandings_RaceId_RacerId PRIMARY KEY (TournamentId, RacerId),
    CONSTRAINT FK_TournamentStandings_Race_RaceId_ID FOREIGN KEY (TournamentId) REFERENCES race.Tournament (Id),
    CONSTRAINT FK_TournamentStandings_Racer_RacerId_ID FOREIGN KEY (RacerId) REFERENCES race.Racer (Id)
)
GO

USE master