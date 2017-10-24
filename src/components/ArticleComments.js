import React, {Component} from 'react'
import buttonToggle from '../decorators/buttonToggle'

const ArticleComments = props => {
    let {comments} = props
    comments =  comments || []
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
    const noComments = <p>--- no comments yet ---</p>
    return (
        <ul>
            {console.log(comments)}
            {(comments.length === 0) ? noComments : commentsList}
       </ul>
    )
}

export default buttonToggle(ArticleComments)