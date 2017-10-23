import React, {Component} from 'react'

const ArticleComments = props => {
    const {comments} = props
    console.log("comments from ArticleComments : ", comments)
    const commentsList = comments.map(comment =>
        <li key={comment.id}>
            <p>
                {comment.text}
                <br/>
                <strong>
                    {comment.user}
                </strong>
            </p>
        </li>
    )
    return (
        <ul>
            {commentsList}
       </ul>
    )
}

export default ArticleComments