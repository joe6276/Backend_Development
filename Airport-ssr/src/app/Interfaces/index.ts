
export interface User{
    Name:string
    Email:string
    Password:string
}

export interface Message{
    message:string
}

export interface LoginUser{
    Email:string
    Password:string
}

export interface LoginSuccess{
    message:string
    token:string
    role:string
    name:string
}

export interface Booking{
    Id:string
    Name:string,
    Email:string
    Destination:string
    TravelDate:string
}

export interface AddBooking{
    Destination:string
    TravelDate:string
}

