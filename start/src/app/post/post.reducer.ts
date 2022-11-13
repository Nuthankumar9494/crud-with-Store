import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { Action } from "rxjs/internal/scheduler/Action"
import { initialstate } from "../post/post.state"
import { addpost, deletepost, updatepost } from "./post.action"

export function postReducer(state:any,action:any){
 return _postReducer(state,action)
}
const _postReducer = createReducer(initialstate,on(addpost,(state,action)=>{
    let post={...action.Post};
    post.id=(state.posts.length+1).toString();
    return{
        ...state,
    posts:[...state.posts,post]
    }
}),on(updatepost,(state,action)=>{
    const update=state.posts.map((post:any)=>{
        return action.Post.id === post.id ? action.Post : post;
    })
    return{
        ...state,
     posts:update,
    }
}),on(deletepost,(state,{id})=>{
    const deletepost = state.posts.filter((data:any)=>{
        return data.id !== id;

    })
    return{
        ...state,
        posts:deletepost,
    }
}))