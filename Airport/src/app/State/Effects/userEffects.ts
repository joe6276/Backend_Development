import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, of,map } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import { AuthenticationService } from "src/app/Services/authentication.service";
import * as LoginActions from '../Actions/userActions'

@Injectable()
export class UserEffects{
    constructor(private authService:AuthenticationService, private action:Actions ,private auth:AuthService){}


    login= createEffect(()=>{
        return this.action.pipe(
            ofType(LoginActions.login),
            exhaustMap(action=>{
                return this.authService.loginUser(action.user).pipe(
                 map(res=>{ 
                    this.auth.setRole(res.role)
                    this.auth.setName(res.name)
                    this.auth.login()
                    localStorage.setItem('token', res.token)
                    return LoginActions.loginSuccess({res})}),
                 catchError(error=>of(LoginActions.loginFailure({errorMessage:error.message})))
                )
            })
        )
    })

    register= createEffect(()=>{
        return this.action.pipe(
            ofType(LoginActions.register),
            exhaustMap(action=>{
                return this.authService.registerUser(action.user).pipe(
                 map(res=>LoginActions.registerSuccess({res})),
                 catchError(error=>of(LoginActions.registerFailure({errorMessage:error.message})))
                )
            })
        )
    })
}