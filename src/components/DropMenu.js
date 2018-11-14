import React from 'react'

export default function Menu({ articles }) {       //вывод содержимого
    const DropMenu = articles.map((article) => 
        <li key = { article.id }>{ article.dropMenu }</li>
    )
    return DropMenu
}