import React from "react"
import styles from "./styles.module.scss";

const Link = ({ text, color = "primary", onClick, fontSize }) => {

    const getColor = () => {
        switch (color) {
            case "primary":
                return "#282c34";
            case "secondary":
                return "#ffffff";
            default:
                return "#282c34"
        }
    }

    return (
        <div className={styles.link}>
            <a onClick={onClick} style={{color: `${getColor()}`}}>{text}</a>
        </div>
    )
}

export default Link