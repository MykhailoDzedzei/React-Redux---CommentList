export default function (state = null, action) {
    switch (action.type) {
        case "COMMENT_SELECTED" :
            return action.payload;
            break;

    }
    return state
}