import React from "react"
import styles from "./styles.module.scss"
import classNames from "classnames"

const Button = ({ text, color, onClick, border = "0px", width, height, fontSize }) => {
    const getClass = () => {
        const cssClass = classNames({ [styles.primary]: color === "primary",
            [styles.secondary]: color === "secondary"})

        return cssClass
    }

    return (
        <button style={{ borderWidth: `${border}` ,
            width: `${width}`,
            height: `${height}`,
            fontSize: `${fontSize}`
        }}
                onClick={() => onClick()}
                className={getClass()}>
            {text}
        </button>
    )
}

export default Button