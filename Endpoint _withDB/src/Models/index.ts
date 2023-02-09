

export class Booking{
    constructor(public Id:string, public Name:string , 
        public Email:string, public Destination:string, public TravelDate:Date){}
}


export class User{
    constructor(public Id:string, public Name:string , 
        public Email:string, public Password:string, public Role:string){}
}


export interface DecodedData{
  Id: string,
  Name:string,
  Email:string,
  Role: string,
  iat: number
  exp: number
}
