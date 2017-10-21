import React, {Component} from 'react'
import Article from './Article'

const ArticleList = props => {
    console.log(props.articles)
    const articleEliments = props.articles.map(article =>
        <li key={article.id}>
            <Article article={article} />
        </li>
    )
    return (
        <ul>
            {articleEliments}
        </ul>
    )
}

export default ArticleList

// export default class ArticleList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isOpen: true
//         }
//     }

//     render() {
//         const {article} = this.props
//         const {isOpen} = this.state
//         return (
//             <div>
//                 <h3>{article.title}</h3>
//                 <button onClick = {this.toggleOpen}>
//                     {isOpen ? 'close' : 'open'}
//                 </button>
//                 {this.getBody()}
//             </div>
//         )
//     }

//     getBody() {
//         if (!this.state.isOpen) return null
//         const {article} = this.props
//         return <section>{article.text}</section>
//     }

//     toggleOpen = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
// }