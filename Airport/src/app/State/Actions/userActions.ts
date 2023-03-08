import { createAction, props } from "@ngrx/store";
import { LoginSuccess, LoginUser, Message, User } from "src/app/Interfaces";



export const login = createAction('[login]-login-user', props<{user:LoginUser}>())
export const loginSuccess = createAction('[login]-login-Success', props<{res:LoginSuccess}>())
export const loginFailure = createAction('[login]-login-Failure', props<{errorMessage:string}>())



export const register = createAction('[register]-register-user', props<{user:User}>())
export const registerSuccess = createAction('[register]-register-Success', props<{res:Message}>())
export const registerFailure = createAction('[register]-register-Failure', props<{errorMessage:string}>())
