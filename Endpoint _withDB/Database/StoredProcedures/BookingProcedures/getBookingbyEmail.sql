 CREATE OR ALTER  PROCEDURE getByEmail (@email VARCHAR(50))
AS
BEGIN
SELECT Id,Name,Email,Destination,TravelDate  FROM FlightsBookings WHERE Email=@email AND isDeleted ='0'
END 