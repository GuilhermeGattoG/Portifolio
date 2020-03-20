import React from "react"
import styles from "./styles.module.scss";
import Image from "../../atoms/Image";

const Tecnology = ({ image, title, text }) => {
    return (
        <div className={styles.tecnology}>
            <div className={`${styles.tecnologyImage} ${image === "react.svg" ? styles.animateRotation : ""}`}>
                <Image className={image === "react.svg" ? styles.animateRotation : ""} alt={image} width={"150px"} src={image} />
            </div>
                <div className={styles.tecnologyContent}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Tecnology