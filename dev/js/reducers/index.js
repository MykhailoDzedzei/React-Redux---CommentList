import {combineReducers} from "redux";
import CommentReducer from "./reducer-comment";
import ActiveCommentReducer from "./reducer-active-comment"


const allReducers =  combineReducers({
    comments: CommentReducer,
    activeComment: ActiveCommentReducer

});

export default allReducers;