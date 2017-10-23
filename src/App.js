import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'

const App = () => {
    return (
        <ArticleList articles = {articles} />
    )
}

export default App
