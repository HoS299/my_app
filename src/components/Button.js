import React from 'react'
import '../style/style.css'


const Btn = props => {
    const {articles} = props
    return (
        <div><button> { articles.name } </button></div>
    )
}

export default Btn