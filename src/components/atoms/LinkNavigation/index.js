import React from "react"
import "./styles.module.scss"

const LinkNavigation = ({ link, text }) => {
    return (
        <a href={`${link}`} >{text}</a>
    )
}

export default LinkNavigation