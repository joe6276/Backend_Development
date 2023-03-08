import { createAction, createReducer, on } from "@ngrx/store";
import { ShowFormAction } from "../Actions/sampleActions";

export interface SampleState{
    showForm:boolean
}

const initialState:SampleState={
    showForm:false
}
export const sampleReducer= createReducer<SampleState>(
 initialState,
    on(ShowFormAction, (state):SampleState=>{
        return{
        ...state,
        showForm:!state.showForm 
        }
    })
)