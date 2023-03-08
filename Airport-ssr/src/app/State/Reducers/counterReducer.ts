import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { DecreaseValue, IncreaseValue } from "../Actions/counterActions";

export interface CounterState{
    count:number
    show:boolean
}

const initialState:CounterState={
    count:10,
    show:true
   
}

const countersliceState=createFeatureSelector<CounterState>('counter')

export const CountState=createSelector(countersliceState, state=>state.count)

export const CounterReducer= createReducer<CounterState>(
    initialState,
    on(IncreaseValue, (state,action):CounterState=>{
        return {
            ...state,
            count:state.count+action.increaseBy,

        }
    }),
    on(DecreaseValue, (state,action):CounterState=>{
        return{
            ...state,
            count:state.count- action.decreaseBy
        }
    })
)