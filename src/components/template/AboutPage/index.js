import React from "react"
import styles from "./styles.module.scss"

const AboutPage = () => {
    return (
        <div id={"about"} className={styles.aboutContainer}>
            <div className={styles.aboutTitle}>
                <h1>Sobre esta página</h1>
                <p>Fiz esta pequena página como desafio pessoal para que servisse de portifólio<br/>Teho a intenção de utiliza-lá para fins de estudo e compartilhamento de experiências técnicas e profissionais</p>
            </div>
        </div>
    )
}

export default AboutPage