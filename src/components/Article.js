import React, {Component} from 'react'
import ArticleComments from './ArticleComments'
import {render} from 'react-dom'
import buttonToggle from '../decorators/buttonToggle'

class Article extends Component {

    render() {
        const {article} = this.props
        // const {isOpen} = this.state
        const BodyText = buttonToggle(this.getBody())

        return (
            <div>
                <h3>{article.title}</h3>
                <BodyText />
            </div>
        )
    }

    getBody() {
        const {article} = this.props
        return (
            <section>
                {article.text}
                <ArticleComments comments={article.comments} />
            </section>
        )
    }
}

export default Article