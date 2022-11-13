import { counterstate } from "../counter/counter.state";
import { poststate } from "../post/post.state";
import {postReducer} from "../post/post.reducer"
import { counterReducer } from "../counter/counter.reducer";

export interface Appstate{
    counter:counterstate;
    post:poststate;
}
export const appreducer={
    counter:counterReducer,
    post:postReducer,
};