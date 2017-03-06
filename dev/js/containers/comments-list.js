import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectComment} from "../actions/index";



class CommentList extends Component {


    showComments() {
        return this.props.comments.map((comment) => {
            return (
                <li key={comment.id}
                onClick={() => {
                   return this.props.selectComment(comment)
                }}
                >
                    <h3>{comment.name}</h3>
                </li>
            )
        })

    }


    render() {
        return (
            <div>
                <ul>

                    {this.showComments()}

                </ul>
                <br/>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };

}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectComment: selectComment}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CommentList);