import React from "react";
import CommentList from "../containers/comments-list";
require("../../scss/style.scss");
import CommentDetails from "../containers/comment-details";



const App = () => {
    return (
        <div>
            <h2>All yossur Commentssssss!</h2>
            <CommentList />
            <div>
                <h1>Comment details:</h1>

                <CommentDetails />
            </div>

        </div>
    )
};


export default App;