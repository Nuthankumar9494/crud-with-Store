import { createAction, props } from "@ngrx/store";
import { post } from "./models/post.model";
  
export const addpost=createAction('addpost',props<{Post:post}>());
export const updatepost=createAction('updatepost',props<{Post:post}>());
export const deletepost =createAction('deletepost',props<{id:string}>());