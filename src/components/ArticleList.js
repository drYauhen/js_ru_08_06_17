import React, {Component} from 'react'
import Article from './Article'


const ArticleList = props => {
    const {articles} = props
 
    const articleElements = articles.map(article => {
        return (
            <li key={article.id}>
                <Article article={article} />
            </li>
        )
    })

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

export default ArticleList