

CREATE PROCEDURE RegisterUser(@id VARCHAR(100), @name VARCHAR(200),@email VARCHAR(300) ,@password VARCHAR(150))
AS
BEGIN
INSERT INTO UserTable(Id,Name,Email,Password)
VALUES(@id,@name,@email,@password)

END