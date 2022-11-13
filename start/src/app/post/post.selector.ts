import { createFeatureSelector, createSelector } from "@ngrx/store";
import { poststate } from "./post.state";

const getPoststate=createFeatureSelector<poststate>('post');
export const getpost=createSelector(getPoststate,(state)=>{
return state.posts;
});
export const getpostByid = createSelector(getPoststate,(state:any,props:any)=>{
 return state.posts.find((post:any)=>post.id === props.id)
})


// const getcounterstate =createFeatureSelector<counterstate>('counter');
// export const getcounter= createSelector(getcounterstate,(state)=>{
//     return state.counter;
// })