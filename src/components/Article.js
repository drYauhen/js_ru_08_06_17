import React, {Component} from 'react'
import ArticleComments from './ArticleComments'
import buttonToggle from '../decorators/buttonToggle'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        console.log('props from Article component: ', this.props)
        const {article} = this.props
        console.log('Article from Article component: ', article)
        const {isOpen} = this.state

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    articleComments(articleComment) {
        return (
            articleComment ? <ArticleComments comments={articleComment} /> : <p>--- no comments yet ---</p>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
            <section>
                {article.text}
                {this.articleComments(article.comments)}
            </section>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default