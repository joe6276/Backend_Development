-- USE Airport
CREATE OR ALTER PROCEDURE getFlights
AS
BEGIN
SELECT Name,Email,Destination, TravelDate FROM FlightsBookings WHERE  isDeleted='0'

END

