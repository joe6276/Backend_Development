-- USE Airport
ALTER PROCEDURE InsertOrUpdate (
    @id VARCHAR(50), @name VARCHAR(100)=NULL , @email VARCHAR(100)=NULL,
     @destination VARCHAR(100)=NULL , @date DATE=NULL)
AS
BEGIN


IF EXISTS(SELECT * FROM FlightsBookings WHERE Id =@id AND isDeleted='0')
BEGIN
UPDATE FlightsBookings SET Name=@name, Email=@email , Destination=@destination , TravelDate= @date
WHERE Id=@id

END
ELSE
BEGIN
INSERT INTO FlightsBookings (Id, Name, Email, Destination, TravelDate)
VALUES( @id, @name, @email, @destination, @date)
END
END
