import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { LoginSuccess } from "src/app/Interfaces";
import * as UserActions from '../Actions/userActions'

export interface UserInterface{
    userData:LoginSuccess|null
    errorMessage:string
    registerSuccessMessage:string
    registerFailureMessage:string
}


const initialState:UserInterface={
    userData:null,
    errorMessage:'',
    registerSuccessMessage:'',
    registerFailureMessage:''

}




const userSlice=createFeatureSelector<UserInterface>('user')

export const nameSelector= createSelector(userSlice, state=>state.userData?.name)

export const userReducer= createReducer<UserInterface>(
    initialState,

    on(UserActions.loginSuccess, (state,actions):UserInterface=>{
        return{
            ...state,
            errorMessage:'',
            userData:actions.res
        }
    }),
    on(UserActions.loginFailure, (state,actions):UserInterface=>{
        return{
            ...state,
            errorMessage:actions.errorMessage,
            userData:null
        }
    }),
    // REGISTER
    on(UserActions.registerSuccess, (state,actions):UserInterface=>{
        return{
            ...state,
            registerSuccessMessage: actions.res.message,
            registerFailureMessage:''
            
        }
    }),
    on(UserActions.registerFailure, (state,actions):UserInterface=>{
        return{
            ...state,
            registerFailureMessage: actions.errorMessage,
            registerSuccessMessage:''
        }
    })
)