

CREATE OR ALTER  PROCEDURE getFlightBookings(@id VARCHAR(50))
AS
BEGIN
SELECT * FROM FlightsBookings WHERE Id=@id AND isDeleted ='0'
END
