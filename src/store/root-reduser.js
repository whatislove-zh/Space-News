import { combineReducers } from "redux";
import { postsReduser } from "./posts/posts-reduser";

export const rootReduser = combineReducers({
    posts: postsReduser,
})