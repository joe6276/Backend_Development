import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isLoggedIn=false
  private role=''
  private name=''


  getName(){
  return this.name
  }

getRole(){
    return this.role
    }

    setRole(role:string){
      this.role=role
    }
    setName(name:string){
      this.name=name
    }


  getAuthStatus():Promise<boolean>{
    const promise = new Promise<boolean>((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.isLoggedIn)
    },10)
    })
    return promise;
  }

  login(){
    this.isLoggedIn=true
  }

  logout(){
    this.isLoggedIn=false;
  }
}
