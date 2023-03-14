
CREATE OR ALTER PROCEDURE deleteFlightBookings(@id VARCHAR(50))
AS
BEGIN
UPDATE FlightsBookings SET isDeleted='1' WHERE Id=@id
END
GO

-- USE Airport
-- EXEC deleteFlightBookings '4cc660dd-58f8-4938-8eb8-879cc41b3eab'
