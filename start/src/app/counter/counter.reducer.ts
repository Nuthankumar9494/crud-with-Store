import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { initialState } from "../counter/counter.state";
import { custom, decrement, increment, reset } from "./counter.action";

const _counterReducer=createReducer(initialState,on(increment,(state)=>{
    return {
        ...state,
        counter:state.counter+1,
    }
}),on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter-1,
    }
}),on(reset,(state)=>{
    return{
        ...state,
        counter:0,
    }
}),on(custom,(state,action)=>{
    return{
        ...state,
        counter:state.counter + action.counter,
    }
}
)
);
export function counterReducer(state:any,action:any){
    return _counterReducer(state,action);
}