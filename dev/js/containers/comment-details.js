import React, {Component} from "react";
import {connect} from "react-redux";


class CommentDetails extends Component {
    render() {

        if(!this.props.comment) {
            return (<div><h4>Select a comment...</h4></div>)
        }
        return (

            <div>
                <h2>{this.props.comment.name}</h2>
                <h3>{this.props.comment.data}</h3>

            </div>

        )
    }
}



function mapStateToProps(state) {
    return {
        comment: state.activeComment
    };

}

export default connect(mapStateToProps)(CommentDetails)