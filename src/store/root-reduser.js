import { combineReducers } from "redux";
import { detailsReduser } from "./details/details-reduser";
import { postsReduser } from "./posts/posts-reduser";

export const rootReduser = combineReducers({
    posts: postsReduser,
    details: detailsReduser,
})