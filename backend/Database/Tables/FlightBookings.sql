
CREATE DATABASE Airport


CREATE TABLE FlightsBookings (Id VARCHAR(50) UNIQUE ,Name VARCHAR(100) ,
 Email VARCHAR(100) , Destination  VARCHAR(100), TravelDate DATE , 
 isDeleted VARCHAR(10) DEFAULT '0')


USE Airport
DROP TABLE FlightsBookings
