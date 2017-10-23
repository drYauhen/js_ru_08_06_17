import React, {Component} from 'react'
import Article from './Article'


const ArticleList = props => {
    const {articles} = props

    console.log("Article list props: ", props)

    const articleElements = articles.map(article => {
        const Terr = ButtonToggle(<Article article={article} />)
        return
            <li key={article.id}>
                <Terr />
            </li>
        }
    )

    return (
        <ul>
            {articleElements} 
        </ul>
    )
}

export default ArticleList