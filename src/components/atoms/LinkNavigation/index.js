import React from "react"
import "./styles.module.scss"

const LinkNavigation = ({ onClick, text }) => {
    return (
        <a onClick={() => onClick()} >{text}</a>
    )
}

export default LinkNavigation