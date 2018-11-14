import React from 'react'
import Menu from './Menu'
import ListBtn from '../list/listBtn'
import '../style/style.css'

const Head = props => {
    return (
        <div className = 'padding'>
            <Menu articles = { ListBtn } />
        </div>
    )
}

export default Head
