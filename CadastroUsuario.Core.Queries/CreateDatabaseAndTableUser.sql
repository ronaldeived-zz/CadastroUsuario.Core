-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'UserRegistration'
)
CREATE DATABASE UserRegistration
GO

use UserRegistration
GO
-- Create a new table called '[TableName]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].User', 'U') IS NOT NULL
DROP TABLE [dbo].[User]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[User]
(
    [Id] INT NOT NULL PRIMARY KEY, -- Primary Key column
    [FirstName] NVARCHAR(50) NOT NULL,
    [SecondName] NVARCHAR(50),
    [Birth] date,
    [Cpf] bigint,
    [Rg] bigint,
    [PostalCode] bigint,
    [Street] NVARCHAR(50),
    [District] NVARCHAR(50),
    [Complement] NVARCHAR(50),
    [HouseNumber] NVARCHAR(50),
    [Phone] bigint,
    [SocialMidias] NVARCHAR(50),
    [DateInserted] date
);
GO