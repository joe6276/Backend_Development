


CREATE PROCEDURE getUserByEmail(@email VARCHAR(300))
AS
BEGIN

	SELECT * FROM UserTable WHERE Email =@email
END
DELETE FROM UserTable