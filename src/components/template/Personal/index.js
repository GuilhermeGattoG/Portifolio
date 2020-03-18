import React from "react"
import styles from "./styles.module.scss"
import Image from "../../atoms/Image";

const Personal = () => {
    return (
        <div className={styles.personalContainer}>
            <div className={styles.picture}>
                <Image width={"100%"} alt={"My Picuture"} src={"author.jpg"} circle={true} />
            </div>
            <div className={styles.description}>
                <h1>Sobre mim</h1>
                <p>Me chamo Guilherme Gatto e sou um programador em início de carreira que busca crescimento profissional<br/><br/>Continuação do texto</p>
            </div>
        </div>
    )
}

export default Personal