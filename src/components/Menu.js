import React from 'react'
import Button from './Button'
import '../style/style.css'

export default function Menu({ articles }) {       //вывод содержимого
    const articleElements = articles.map((article) => 
        <div key = { article.id }><Button articles = { article }/></div>
    )
    return articleElements
}
