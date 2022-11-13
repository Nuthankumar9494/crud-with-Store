import { post } from "./models/post.model"

export interface poststate{
    posts:post[];
}
export const initialstate :poststate={
    posts:[{
        id: '1',
        Name:'Nuthan',
        Designation:'Angular'
    
    
    }]
}