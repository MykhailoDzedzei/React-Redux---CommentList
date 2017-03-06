export const selectComment = (comment)=> {
    console.log(`show comment details ${comment.data}`);
    return {
        type: "COMMENT_SELECTED",
        payload: comment
    }
}