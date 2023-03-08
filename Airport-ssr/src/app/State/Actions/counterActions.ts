import { createAction, props } from "@ngrx/store";



export const IncreaseValue= createAction('[Home]-Increase',props<{increaseBy:number}>())
export const DecreaseValue= createAction('[Home]-Decrease', props<{decreaseBy:number}>() )